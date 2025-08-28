import connectdb from "@/db/connectdb";
import Lab from "@/models/Labs";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        await connectdb()
        const Labs = await Lab.find()
        return NextResponse.json({ Labs }, { status: 200 })
    } catch (err) {
        console.log(err)
        return NextResponse.json({ message: "Server Error" }, { status: 500 })
    }
}