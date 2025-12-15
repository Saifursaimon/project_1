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


export async function DELETE(req, { params }) {
  await connectDB();

  const { projectId } = await params;
  console.log('inside api',projectId)

  const product = await Product.findById(projectId);
  if (!product) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

 
  await Product.findByIdAndDelete(projectId);

  return NextResponse.json({ success: true });
}

export async function PUT(req, { params }) {
  await connectDB();

  const { projectId } = await params;
  const product = await Product.findById(projectId);
  if (!product) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const body = await req.json();

  const updated = await Product.findByIdAndUpdate(
    projectId,
    {
      name: body.name || product.name,
      category: body.category || product.category,
      categoryId: body.categoryId || product.categoryId,
      description: body.description || product.description,
      date: body.date || product.date,
      contacts: body.contacts || product.contacts,
    },
    { new: true }
  );

  return NextResponse.json(updated);
}