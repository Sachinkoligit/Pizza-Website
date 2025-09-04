import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req) {
  const { username, password } = await req.json();
  if (username === process.env.USER_NAME && password === process.env.PASSWORD) {
    const response = NextResponse.json(
      { message: "Successful" },
      { status: 200 }
    );
    response.cookies.set("token", process.env.TOKEN, {
      maxAge: 60 * 60,
      sameSite: "strict",
      path: "/",
    });
    return response;
  } else {
    return NextResponse.json(
      { message: "Wrong Credentials!" },
      { status: 400 }
    );
  }
}
