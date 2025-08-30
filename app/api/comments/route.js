"use server"

import { NextResponse } from "next/server"
import connectdb from "@/db/connectdb"
import Comment from "@/models/Comment"

export async function GET(request) {
    try {
        await connectdb();
        const comments = await Comment.find({})
        if (comments) {
            return NextResponse.json({ succcess: true, comments }, { status: 200 })
        } else {
            return NextResponse.json({ success: false, message: "Comment box is empty" }, { status: 400 })
        }
    } catch (err) {
        console.error(err);
        NextResponse.json({ message: "Server Error" }, { status: 500 })
    }
}

export async function POST(request) {
    try {
        await connectdb();
        const comment = await request.json()
        if (comment) {
            let result = await Comment.create(comment);
            if (result) {
                return NextResponse.json({ success: true }, { status: 200 })
            } else {
                return NextResponse.json({ success: false }, { status: 400 })
            }

        }
    } catch (err) {
        return NextResponse.json({ message: "Server Error" }, { status: 500 })
    }
}

export async function DELETE(request) {
    try {
        await connectdb()
        await Comment.deleteMany({});
        return NextResponse.json({ success: true }, { status: 200 })
    } catch (err) {
        return NextResponse.json({ message: "Server Error" }, { status: 500 })
    }
}