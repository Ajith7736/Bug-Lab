import Dummydata from "@/models/Dummydata";
import { NextResponse } from "next/server";
import connectdb from "@/db/connectdb";

// find the user in dummydata collection using username

export async function POST(request) {
    try {
        connectdb()
        const { Username } = await request.json();
        const user = await Dummydata.findOne({ Username })
        if (user) {
            return NextResponse.json({ success: true, Email : user.Email ,Username : user.Username , Password : user.Password}, { status: 200 })
        } else {
            return NextResponse.json({ success: false }, { status: 400 })
        }
    } catch (err) {
        return NextResponse.json({ message: "Server Error" }, { status: 500 })
    }
}