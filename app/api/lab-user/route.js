import Dummydata from "@/models/Dummydata";
import { NextResponse } from "next/server";
import connectdb from "@/db/connectdb";

// Find the user from Dummydata collection

export async function POST(request) {
    try {
        connectdb()
        const { Username, Password } = await request.json();
        const user = await Dummydata.findOne({ Username, Password });

        if (user) {
            return NextResponse.json({ success: true, user: { Email: user.Email, Username: user.Username , id : user._id} }, { status: 200 })
        } else {
            return NextResponse.json({ success: false }, { status: 400 })
        }

    } catch (err) {
        return NextResponse.json({ message: "Server Error" }, { status: 500 })
    }
}


