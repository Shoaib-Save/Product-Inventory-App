const Product = require("../models/productModel");
const { v4: uuidv4 } = require("uuid");

exports.getProducts = async (req, res) => {
  const search = req.query.search || "";
  const filter = search ? { name: { $regex: search, $options: "i" } } : {};

  const products = await Product.find(filter);
  res.json(products);
};

exports.addProduct = async (req, res) => {
  const product = new Product({ ...req.body, productId: uuidv4() });
  await product.save();
  res.json(product);
};

exports.getProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findOne({ productId: id });
  res.json(product);
};

exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  await Product.findOneAndUpdate({ productId: id }, req.body);
  res.json({ message: "Product updated" });
};

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;

  await Product.findOneAndDelete({ productId: id });
  res.json({ message: "Product deleted" });
};
