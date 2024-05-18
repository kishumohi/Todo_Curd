import connectdb from "@/libs/mongodb.js";
import Topic from "@/models/topic.js";
import { NextResponse } from "next/server.js";

export async function POST(request) {
  const { title, description } = await request.json();
  await connectdb();
  await Topic.create({ title, description });
  return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}

export async function GET() {
  await connectdb();
  const topics = await Topic.find();
  return NextResponse.json({ topics });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectdb();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic Deleted" }, { status: 200 });
}
