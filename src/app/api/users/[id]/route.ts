import { NextRequest, NextResponse } from "next/server";
import db from "../../../../../prisma/client";

export async function GET(
  request: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  const uniqueUser = await db.user.findUnique({
    where: {
      id
    },
  });
  return NextResponse.json(uniqueUser);
}

export async function PUT(
  request: NextRequest,
  { params: { id } }: { params: { id: number } }
) {
  const user = await request.json();

  return NextResponse.json({ ...user, id }, { status: 202 });
}

export async function DELETE(
  request: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  try {
    const user = await db.user.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "no user found" }, { status: 404 });
  }
}
