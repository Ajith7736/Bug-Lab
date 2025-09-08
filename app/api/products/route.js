import Database from "better-sqlite3";
import path from "path";
import { NextResponse } from "next/server";

// get products from the sql database

export async function GET(request) {
    try {
        const dbpath = path.join(process.cwd(), "database.db")
        const db = Database(dbpath)

        const { searchParams } = new URL(request.url);
        const category = searchParams.get("category");

        let query;

        if (category) {
            query = `SELECT * FROM products WHERE category='${category}' AND hidden=0;`
        } else {
            query = `SELECT * FROM products WHERE hidden=0;`
        }

        const products = await db.prepare(query).all()

        if (products) {
            return NextResponse.json({ success: true, products },{status : 200})
        } else {
            return NextResponse.json({ Success: false, message: "No products" },{status : 400})
        }
    } catch (err) {
        return NextResponse.json({message : "Internal Server Error"},{status : 500})
    }
}
