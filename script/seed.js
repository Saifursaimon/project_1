import 'dotenv/config';
import connectDB from '../lib/db.js';
import Product from '../models/Product.js';
import { projects } from '../data/project.js';

async function seed() {
  try {
    await connectDB();

    console.log('🧹 Clearing existing products...');
    await Product.deleteMany();

    console.log('🌱 Seeding products...');
    await Product.insertMany(projects);

    console.log('✅ Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  }
}

seed();
