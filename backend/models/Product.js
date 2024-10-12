const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  available:Number,
  name: String,
  originalPrice:Number,
  discountPrice: Number,
  pieces:String,
  image: String,
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
