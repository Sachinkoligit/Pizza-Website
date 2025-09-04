import { Connect } from "@/app/dbConfig";
import Order from "@/models/Order";
import { NextResponse } from "next/server";

// GET handler
export async function GET(req, context) {
  await Connect();
  const { id } = await context.params;
  try {
    const order = await Order.find({ _id: id });
    return NextResponse.json(order, { status: 200, message: "Data Found" });
  } catch (err) {
    return NextResponse.json({ Error: err.message }, { status: 500 });
  }
}

// POST handler
// export async function POST(req) {
//   await Connect();
//   try {
//     const body = await req.json(); // parse JSON body
//     const order = await Order.create(body);
//     return NextResponse.json(order, { status: 201 });
//   } catch (err) {
//     return NextResponse.json({ error: err.message }, { status: 500 });
//   }
// }

// Put handler
export async function PUT(req, context) {
  await Connect();
  try {
    const { id } = await context.params;
    const data = await req.json();
    const body = await Order.findByIdAndUpdate(id, data); // parse JSON body
    return NextResponse.json(body, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
