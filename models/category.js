const mongoose = require("mongoose");

const CategoryScheme = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Категорийн нэрийг оруулна уу?"],
    unique: true,
    trim: true,
    maxlength: [50, "Категорийн нэрийн урт дээд тал нь 50 тэмдэгт байх ёстой."],
  },
  description: {
    type: String,
    required: [true, "Категорийн тайлбарыг заавал оруулна уу?"],
    maxlength: [
      500,
      "Категорийн нэрийн урт дээд тал нь 500 тэмдэгт байх ёстой.",
    ],
  },
  photo: {
    type: String,
    default: "no-photo.jpg",
  },
  averageRating: {
    type: Number,
    min: [1, "Рэйтинг хамгийн багадаа 1 байх ёстой"],
    max: [10, "Рэйтинг хамгийн багадаа 10 байх ёстой"],
  },
  averagePrice: Number,
  createedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("category", CategoryScheme);
