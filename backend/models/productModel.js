const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productId: { type: String, unique: true },
  name: String,
  description: String,
  manufacturer: String,
  manufacturingDate: Date,
  price: Number,
  quantity: Number,
});

module.exports = mongoose.model('Product', productSchema);
