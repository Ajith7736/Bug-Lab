import connectdb from "@/db/connectdb";
import Productlist from "@/models/Productlist";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        await connectdb()
        const { Category } = await request.json();

        if (Category) {
            const products = await Productlist.find({ Category, hidden: false })
            return NextResponse.json({ success: true, products }, { status: 200 })
        } else {
            const products = await Productlist.find({ Category: "electronics", hidden: false })
            return NextResponse.json({ success: true, products }, { status: 200 })
        }

    } catch (err) {
        console.log(err)
        return NextResponse.json({
            message: "Server Error"
        }, { status: 500 })
    }
}