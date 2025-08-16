import Database from "better-sqlite3";
import path from "path";
import { NextResponse } from "next/server";
import Success from "@/components/Success";

export async function GET(request) {
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
        return NextResponse.json({ success: true, products })
    } else {
        return NextResponse.json({ Success: false, message: "No products" })
    }
}
