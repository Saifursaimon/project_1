import mongoose from "mongoose";

const DocumentSchema = new mongoose.Schema({
  name: String,
  url: String,
});

const ProductSchema = new mongoose.Schema(
  {
    name: String,
    category: String,
    categoryId: String,
    date: String,

    thmbnl: String, 
    description: String,

    images: [String], 
    documents: [DocumentSchema],

    contacts: [String],
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
