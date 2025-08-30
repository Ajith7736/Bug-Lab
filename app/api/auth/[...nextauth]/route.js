// next auth handler

import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import TwitterProvider from "next-auth/providers/twitter";
import connectdb from "@/db/connectdb";
import User from "@/models/User";
import Lab from "@/models/Labs";
import Progress from "@/models/Progress";



const handler = NextAuth({
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        TwitterProvider({
            clientId: process.env.TWITTER_CLIENT_ID,
            clientSecret: process.env.TWITTER_CLIENT_SECRET,
            version: "1.0a",
            profile(profile) {
                return {
                    id: profile.id_str,
                    name: profile.name,
                    email: profile.email,
                    image: profile.profile_image_url_https,
                }
            }
        }),
    ], callbacks: {
        async signIn({ user, account }) {
            try {
                await connectdb();

                if (!user.email) {
                    console.error("No email returned");
                    return false;
                }

                const existinguser = await User.findOne({ Email: user.email })

                if (!existinguser) {
                    const newuser = await User.create({
                        Email: user.email,
                        Name: user.name,
                        Profilepic: user.image,
                        Username: null
                    });

                    let Labs = await Lab.find({}, "labId");
                    const Progresslabs = Labs.map((item) => {
                        return {
                            userId: newuser._id,
                            labId: item.labId
                        }
                    })
                    await Progress.create(Progresslabs);
                }
                return true;
            } catch (err) {
                console.error("SignIn error : ", err);
                return false;
            }
        },

        async jwt({ token, user }) {
            if (user) {
                await connectdb();
                const dbuser = await User.findOne({ Email: user.email });
                token.id = dbuser._id;
                token.username = dbuser.Username;
                token.name = dbuser.Name;
            }
            return token;
        },

        async session({ session, token }) {
            if (token) {
                session.user.id = token.id;
                session.user.username = token.username;
                session.user.name = token.name;
            }
            return session;
        },
        redirect({ url, baseUrl }) {
            if (url === baseUrl) {
                return `${baseUrl}/setusername`
            }
            return url.startsWith(baseUrl) ? url : baseUrl;
        }
    },
    secret: process.env.NEXTAUTH_SECRET,
});


export { handler as GET, handler as POST };
