
import dotenv from "dotenv";


import connectDB from "../lib/db.js";
import Product from "../models/Product.js";

async function resetDB() {
  try {
    await connectDB();
    console.log("🧹 Connected to DB. Clearing collections...");


    await Product.deleteMany(); 
   

    console.log("✅ All collections cleared successfully!");

    process.exit(0);
  } catch (error) {
    console.error("❌ Failed to reset DB:", error);
    process.exit(1);
  }
}

resetDB();
