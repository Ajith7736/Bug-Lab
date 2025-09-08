import Dummydata from "@/models/Dummydata";
import connectdb from "@/db/connectdb";
import { NextResponse } from "next/server";

//Update Email of the user data in dummydata collection

export async function POST(request) {
    try {
        connectdb();
        const { Email, Username } = await request.json();
        const newdata = await Dummydata.findOneAndUpdate({ Username }, { Email }, { new: true }) 
        return NextResponse.json({
            success: true,
            message: "Email updated Successfully",
            updateduser : { Email : newdata.Email , Username : newdata.Username }
        }, { status: 200 });
    } catch (err) {
        console.log(err)
        return NextResponse.json({
            success: false,
            message: "server error"
        }, { status: 500 })
    }
}