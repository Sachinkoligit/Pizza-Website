import { Connect } from "@/app/dbConfig";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

// GET handler
export async function GET() {
  await Connect();
  try {
    const products = await Product.find();
    return NextResponse.json(products, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// POST handler
export async function POST(req) {
  await Connect();
  try {
    const body = await req.json(); // parse JSON body
    const product = await Product.create(body);
    return NextResponse.json(product, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
