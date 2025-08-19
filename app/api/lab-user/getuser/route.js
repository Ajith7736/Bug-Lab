import Dummydata from "@/models/Dummydata";
import { NextResponse } from "next/server";
import connectdb from "@/db/connectdb";

export async function POST(request) {
    try {
        connectdb()
        const { Username } = await request.json();
        const user = await Dummydata.findOne({ Username })
        if (user) {
            return NextResponse.json({ success: true, Email : user.Email }, { status: 200 })
        } else {
            return NextResponse.json({ success: false }, { status: 400 })
        }
    } catch (err) {
        return NextResponse.json({ message: "Server Error" }, { status: 500 })
    }
}