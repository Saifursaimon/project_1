import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Product from "@/models/Product";

export async function GET(req, { params }) {
  await connectDB();

  const { projectId } = await params;
 

  const project = await Product.findById(projectId);


  if (!project) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(project);
}
