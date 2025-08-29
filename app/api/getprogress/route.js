import connectdb from "@/db/connectdb";
import { NextResponse } from "next/server";
import Progress from "@/models/Progress";

export async function POST(request) {
    try {
        await connectdb()
        const { userId } = await request.json();
        const Progressdata = await Progress.find({ userId })
        if (Progressdata) {
            return NextResponse.json({ success: true, Progressdata }, { status: 200 })
        } else {
            return NextResponse.json({ success: false, message: "Something went wrong" }, { status: 400 })
        }
    } catch (err) {
        return NextResponse.json({ message: "Server Error" }, { status: 500 })
    }
}