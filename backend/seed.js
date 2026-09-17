require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Medicine = require("./models/Medicine");
const User = require("./models/User");

const medicines = [
  { name: "Paracetamol 500mg", brand: "Calpol", category: "Painkiller", description: "Relief from fever and mild to moderate pain.", price: 25, mrp: 30, stock: 100, manufacturer: "GSK" },
  { name: "Azithromycin 500mg", brand: "Azithral", category: "Antibiotic", description: "Prescription antibiotic for bacterial infections.", price: 120, mrp: 135, stock: 50, requiresPrescription: true, manufacturer: "Alembic" },
  { name: "Dettol Antiseptic Liquid", brand: "Dettol", category: "Antiseptic", description: "Antiseptic liquid for cleaning minor cuts and wounds.", price: 85, mrp: 95, stock: 75, manufacturer: "Reckitt" },
  { name: "Vitamin C 500mg", brand: "Limcee", category: "Vitamin", description: "Chewable vitamin C supplement.", price: 30, mrp: 35, stock: 120, manufacturer: "Abbott" },
  { name: "Metformin 500mg", brand: "Glycomet", category: "Diabetes", description: "Medicine used to control blood sugar levels.", price: 42, mrp: 48, stock: 80, requiresPrescription: true, manufacturer: "USV" },
  { name: "Amlodipine 5mg", brand: "Amlong", category: "Cardiac", description: "Medicine for managing high blood pressure.", price: 55, mrp: 62, stock: 65, requiresPrescription: true, manufacturer: "Micro Labs" },
  { name: "Moisturizing Cream", brand: "Cetaphil", category: "Skincare", description: "Daily moisturizer for dry and sensitive skin.", price: 299, mrp: 340, stock: 40, manufacturer: "Galderma" },
  { name: "ORS Orange Powder", brand: "Electral", category: "Other", description: "Oral rehydration salts for fluid and electrolyte replacement.", price: 22, mrp: 25, stock: 150, manufacturer: "FDC" },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Medicine.deleteMany({});
    await Medicine.insertMany(medicines);

    const password = await bcrypt.hash("admin123", 10);
    await User.findOneAndUpdate(
      { email: "admin@pharmacy.com" },
      { name: "Pharmacy Admin", email: "admin@pharmacy.com", password, role: "admin" },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    console.log(`Seeded ${medicines.length} medicines.`);
    console.log("Admin login: admin@pharmacy.com / admin123");
  } catch (error) {
    console.error(`Seed failed: ${error.message}`);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

seed();
