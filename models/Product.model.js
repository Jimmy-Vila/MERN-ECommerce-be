const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    brand: {
      type: String,
      required: [true, "Category is required."],
    },
    model: {
      type: String,
      required: [true, "Model is required."],
    },
    category: {
      type: String,
      required: [true, "Category is required."],
    },
    isEbike: {
      type: Boolean,
      required: true,
      default: false,
    },
    price: {
      type: Number,
      required: [true, "Specify the price"],
    },
    isAvailable: {
      type: Boolean,
      required: true,
      default: true,
    },
    quantity: {
      type: Number,
      required: [true, "Specify quantity"],
    },
  },
  {
    timestamps: true,
  }
);

const Product = model("Product", productSchema);

module.exports = Product;
