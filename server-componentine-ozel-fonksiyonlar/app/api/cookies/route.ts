import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { key, value } = await req.json();

  if (!key || !value) {
    return NextResponse.json({ message: "Key ve Value zorunludur!" }, { status: 400 });
  }

  if(key && value){
    (await cookies()).set(key, value, { maxAge: 60 * 2 }); // 2 dakika
  }

  return NextResponse.json({ message: "Cookie eklendi!" });
}
