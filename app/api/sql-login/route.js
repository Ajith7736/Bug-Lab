import Database from "better-sqlite3";
import { NextResponse } from "next/server";
import path from "path";

export async function POST(request){
    const dbpath = path.join(process.cwd(),"database.db");
    const db = new Database(dbpath);

    const { username,password } = await request.json();

    const query = `SELECT * FROM users WHERE username= '${username}' AND password= '${password}'`;
    const user = db.prepare(query).get();

    if(user){
        return NextResponse.json({success : true,message : `Welcome, ${user.username}`},{status : 200})
    }else{
        return NextResponse.json({success : false,message : "Invalid username or password"},{status : 400})
    }
}