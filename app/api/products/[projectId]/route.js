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

  const { projectId } = params;

  const product = await Product.findById(projectId);
  if (!product) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const formData = await req.formData();

  // === TEXT FIELDS ===
  const updates = {
    name: formData.get("name") || product.name,
    category: formData.get("category") || product.category,
    categoryId: formData.get("categoryId") || product.categoryId,
    description: formData.get("description") || product.description,
    date: formData.get("date") || product.date,
  };

  // === CONTACT LINKS ===
  const contacts = formData.getAll("contacts");
  if (contacts.length > 0) updates.contacts = contacts;

  // === UPDATE DB ===
  const updated = await Product.findByIdAndUpdate(projectId, updates, { new: true });

  return NextResponse.json(updated);
}