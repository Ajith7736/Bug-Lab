import Dummydata from "@/models/Dummydata";
import connectdb from "@/db/connectdb";
import { NextResponse } from "next/server";

// get user from dummydata collection

export async function POST(request) {
    try {
        await connectdb();
        const { Username, Password } = await request.json();
        if (!Username || !Password) {
            return NextResponse.json({
                success: false,
                message: "Something went wrong try again"
            }, { status: 400 })
        }
        const existinguser = await Dummydata.findOne({ Username, Password })
        if (existinguser) {
            return NextResponse.json({
                success: true,
                message: `Welcome , ${existinguser.Username}`
            }, { status: 200 })
        } else {
            return NextResponse.json({
                success: false,
                message: "Invalid Username or Password"
            }, { status: 400 })
        }
    } catch (err) {
        return NextResponse.json({
            message: "Server Error"
        }, { status: 500 })
    }
}