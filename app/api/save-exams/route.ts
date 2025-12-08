import { NextResponse } from "next/server";
import fs from "fs-extra";
import path from "path";

export async function POST(req: Request) {
  const body = await req.json();
  const file = path.join(process.cwd(), "data/exams.json");

  await fs.writeJson(file, body, { spaces: 2 });

  return NextResponse.json({ ok: true });
}
