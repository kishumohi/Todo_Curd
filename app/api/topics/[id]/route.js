import connectdb from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  console.log(params);
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();
  await connectdb();
  await Topic.findByIdAndUpdate(id, { title, description });
  console.log(title);
  return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectdb();
  const topic = await Topic.findOne({ _id: id });
  return NextResponse.json({ topic }, { status: 200 });
}
