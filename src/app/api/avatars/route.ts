import { readdirSync } from "fs";
import { join } from "path";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const avatarDir = join(process.cwd(), "public", "avatars");
    const files = readdirSync(avatarDir)
      .filter((file) => /^\d+\.(webp|png|jpg|jpeg|gif)$/i.test(file))
      .sort((a, b) => {
        const numA = parseInt(a.split(".")[0]);
        const numB = parseInt(b.split(".")[0]);
        return numA - numB;
      })
      .map((file) => `/avatars/${file}`);

    return NextResponse.json({ files });
  } catch (error) {
    return NextResponse.json({ files: ["/avatars/0.webp"] }, { status: 200 });
  }
}