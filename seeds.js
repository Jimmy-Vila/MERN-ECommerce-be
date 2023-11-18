const mongoose = require("mongoose");
const Product = require("./models/Product.model");
const User = require("./models/User.model");

require("dotenv").config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Sample product data
const products = [
  {
    brand: "SampleBrand1",
    model: "SampleModel1",
    category: "SampleCategory1",
    isEbike: false,
    price: 100,
    isAvailable: true,
    quantity: 10,
  },
  {
    brand: "SampleBrand2",
    model: "SampleModel2",
    category: "SampleCategory2",
    isEbike: true,
    price: 150,
    isAvailable: false,
    quantity: 5,
  },
  // Add more sample data as needed
];

// Function to seed the database with products
async function seedDatabase() {
  try {
    // Clear existing data
    await Product.deleteMany();

    // Insert new data
    await Product.insertMany(products);

    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    // Close the connection after seeding
    mongoose.disconnect();
  }
}

// Run the seed function
seedDatabase();
