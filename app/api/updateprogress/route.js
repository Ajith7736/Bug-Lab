import connectdb from "@/db/connectdb";
import Progress from "@/models/Progress";
import User from "@/models/User";
import { NextResponse } from "next/server";

// update the completed status of the user progress

export async function PUT(request) {
    try {
        await connectdb();
        const { userId, labId } = await request.json();
        const update = await Progress.findOneAndUpdate({ userId, labId, completed: false }, { completed: true, CompletedAt: new Date() }, { new: true })
        if (update) {
            const Score = await User.findByIdAndUpdate(userId, { $inc: { Score: 20 } }, { new: true });
            console.log(Score)
            return NextResponse.json({ success: true, update }, { status: 200 })
        } else {
            return NextResponse.json({ success: true }, { status: 200 })
        }
    } catch (err) {
        return NextResponse.json({ message: "Server Error" }, { status: 500 })
    }
}