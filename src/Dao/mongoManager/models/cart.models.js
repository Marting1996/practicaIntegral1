import mongoose from "mongoose";

const cartCollection ="carts"
const cartSchema = new mongoose.Schema({
   products: {
        type: [{
            id: String,
            title: String,
            quantity: Number
        }]
   } 
})

const cartModel = mongoose.model(cartCollection, cartSchema)

export default cartModel