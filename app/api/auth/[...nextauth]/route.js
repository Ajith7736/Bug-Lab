// next auth handler

import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import TwitterProvider from "next-auth/providers/twitter";
import connectdb from "@/db/connectdb";
import User from "@/models/User";



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
                if (account.provider == "google") {
                    const existinguser = await User.findOne({ Email: user.email })
                    if (!existinguser) {
                        await User.create({
                            Email: user.email,
                            Name: user.name,
                            Profilepic: user.image
                        })
                    }
                    return true
                }
                if (account.provider == "github") {
                    const existinguser = await User.findOne({ Email: user.email })
                    if (!existinguser) {
                        await User.create({
                            Email: user.email,
                            Name: user.name,
                            Profilepic: user.image
                        })
                    }
                    return true
                }
                if (account.provider == "twitter") {
                    const existinguser = await User.findOne({ Email: user.email })
                    if (!existinguser) {
                        await User.create({
                            Email: user.email,
                            Name: user.name,
                            Profilepic: user.image
                        })
                    }
                    return true
                }
            }catch(err){
                console.error(err)
            }
        }
    },
    secret: process.env.NEXTAUTH_SECRET,
});


export { handler as GET, handler as POST };
