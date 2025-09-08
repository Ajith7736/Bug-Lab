import User from "@/models/User";
import connectdb from "@/db/connectdb";
import { NextResponse } from "next/server";

// update username 

export async function POST(request) {
    try{
        await connectdb()
        const { Username , Email } = await request.json();
        const existingusername = await User.findOne({Username})
        if(existingusername){
            return NextResponse.json({success : false , message : "Username already taken"},{status : 400})
        }
        const user = await User.findOneAndUpdate({Email},{Username},{new : true})
        if(user){
            return NextResponse.json({success : true , message : "Username added successfully"},{status : 200})
        }else{
            return NextResponse.json({success : false, message : "Something went wrong"},{status : 400})
        }
    }catch(err){
        console.log(err)
        return NextResponse.json({success : false , message : "Server error"},{status : 500})
    }
}