import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../../prisma/client";

export async function POST(request: NextRequest) {
  const content = await request.json();

  return NextResponse.json({ content });
}
export async function PUT(request: NextRequest) {
  const users = await db.user.create({
    data: {
      name: "moahmmed",
      email: "meoe@gamil.com",
    },
  });

  return NextResponse.json(users);
}
