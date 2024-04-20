import { NextRequest, NextResponse } from "next/server";
import db from "../../../../prisma/client";

export async function GET(request: NextRequest) {
  const users = await db.user.findMany()
  return NextResponse.json({ users });
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
