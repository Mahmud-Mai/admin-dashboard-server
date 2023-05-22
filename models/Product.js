import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    Category: String,
    Rating: Number,
    Supply: String,
}, {timeStamps: true})

const Product = mongoose.model('Product', ProductSchema)
export default Product