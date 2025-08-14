const mongoose = require("mongoose");

const productSchema = mongoose.Schema();

const UsersProducts = mongoose.model('product', productSchema);

module.exports = {UsersProducts}