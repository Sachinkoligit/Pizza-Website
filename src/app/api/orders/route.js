import { Connect } from "@/app/dbConfig";
import Order from "@/models/Order";
import { NextResponse } from "next/server";

// GET handler
export async function GET() {
  await Connect();
  try {
    const order = await Order.find();
    return NextResponse.json(order, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// POST handler
export async function POST(req) {
  await Connect();
  try {
    const body = await req.json(); // parse JSON body
    const order = await Order.create(body);
    return NextResponse.json(order, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
