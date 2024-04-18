import { NextRequest, NextResponse } from "next/server";

export function GET(
  request: NextRequest,
  { params: { id } }: { params: { id: number } }
) {
  if (id > 10)
    return NextResponse.json({ message: "no user" }, { status: 404 });

  return NextResponse.json({ grett: "user" + id + " said Hi" });
}

export async function PUT(request: NextRequest,{ params: { id } }: { params: { id: number } }) {
  const user= await request.json();

  return NextResponse.json({...user,id},{status:202});
}
