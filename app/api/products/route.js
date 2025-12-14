import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Product from "@/models/Product";
import cloudinary from "@/lib/cloudinary";

async function upload(file, folder) {
  const buffer = Buffer.from(await file.arrayBuffer());

  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      { folder, resource_type: "auto" },
      (err, result) => {
        if (err) reject(err);
        resolve(result.secure_url);
      }
    ).end(buffer);
  });
}


export async function GET() {
  await connectDB();

  const products = await Product.find().sort({ createdAt: -1 });

  return NextResponse.json(products);
}


export async function POST(req) {
  await connectDB();

  const formData = await req.formData();

  const cover = formData.get("coverImage");
  const images = formData.getAll("images");
  const documents = formData.getAll("documents");

  // ⬆ Uploads
  const thmbnl = cover ? await upload(cover, "covers") : "";

  const imageUrls = await Promise.all(
    images.map((img) => upload(img, "images"))
  );

  const documentFiles = await Promise.all(
    documents.map(async (doc) => ({
      name: doc.name,
      url: await upload(doc, "documents"),
    }))
  );

  // ⬇ Save EXACT FORMAT
  const product = await Product.create({
    name: formData.get("name"),
    category: formData.get("category"),
    categoryId: formData.get("categoryId"),
    date: formData.get("date"),

    thmbnl,
    description: formData.get("description"),

    images: imageUrls,
    documents: documentFiles,

    contacts: formData.getAll("contacts"),
  });

  return NextResponse.json(product);
}
