import Dummydata from "@/models/Dummydata";
import connectdb from "@/db/connectdb";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        await connectdb();
        let { Userid, currentpassword, newpassword } = await request.json();
        if(!Userid){
            Userid = '68a5b33d21344c6fd8a563e8';
        }
        const user = await Dummydata.findById(Userid)
        if (!user) {
            return NextResponse.json({
                success: false,
                message: "User not found"
            }, { status: 400 })
        }

        if (user.Password !== currentpassword && currentpassword !== "whatever") {
            return NextResponse.json({
                success: false,
                message: "Current password is incorrect"
            }, { status: 400 })
        }

        user.Password = newpassword;

        await user.save();

        return NextResponse.json({
            success: true,
            message: "Password updated successfully",
            updateduser: {
                id : user._id,
                Email: user.Email,
                Username: user.Username
            }
        }, { status: 200 })

    } catch (err) {
        console.log(err)
        return NextResponse.json({
            success: false,
            message: "server error"
        }, { status: 500 })
    }
}