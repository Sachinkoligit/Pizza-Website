import { Connect } from "@/app/dbConfig";
import Product from "@/models/Product";
import { NextResponse } from "next/server";
import React from "react";

// GET handler
export async function GET(req, context) {
  await Connect();
  // const { params } = await context;
  const { id } = await context.params;

  try {
    const product = await Product.findById(id);
    // if (!product) {
    //   return NextResponse.json({ error: "Product not found" }, { status: 404 });
    // }
    return NextResponse.json(product, { status: 200, message: "Data Found" });
  } catch (err) {
    return NextResponse.json({ Error: err.message }, { status: 500 });
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

// Delete handler
export async function DELETE(req, context) {
  await Connect();
  try {
    const { id } = await context.params;
    const body = await Product.findByIdAndDelete(id); // parse JSON body
    console.log(body);
    return NextResponse.json("Deleted Successfully", { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// Put handler
export async function PUT(req, context) {
  await Connect();
  try {
    const { id } = await context.params;
    const body = await Product.findByIdAndUpdate(id,req.json()); // parse JSON body
    console.log(body);
    return NextResponse.json("Deleted Successfully", { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
