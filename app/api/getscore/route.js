import connectdb from "@/db/connectdb";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function GET(request) {
    try{
        await connectdb();
        const user = await User.find({},"Username Score").sort({ Score : -1 });
        return NextResponse.json(user,{status : 200})
    }catch(err){
        console.log(err)
        return NextResponse.json({message : "Server Error"},{status : 500})
    }
}