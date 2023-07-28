import { Router } from "express";
import productModel from "../Dao/mongoManager/models/product.models.js";

const Productsrouter = Router();

Productsrouter.get("/", async(req, res) => {
    const products = await productModel.find().lean().exec()
    res.render("home", { products })
})

Productsrouter.get('/:pid', async (req, res) => {
    const productId = req.params.pid;
    try {
        const product = await productModel.findById(id).lean().exec();
        if (product) {
            return product;
        } else {               
            console.log("Product not found");
            return null;
        }
    } catch (error) {
        console.log(`Error al obtener el producto de la base de datos: ${error}`);
        return null;
    }
});
Productsrouter.put('/:pid', async (req, res) => {
    const productId = req.params.pid;
    const updateFields = req.body; 
    try {
        const product = await productModel.findByIdAndUpdate(id, updateFields, { new: true });
        if (product) {
            console.log("El producto se actualizó correctamente");
        } else {
            console.log("Producto a actualizar no encontrado");
        }
    } catch (error) {
        console.log(`Error al actualizar el producto en la base de datos: ${error}`);
    }

});

Productsrouter.delete('/:pid', async (req, res) => {
    const productId = req.params.pid;
    try {
        const product = await productModel.findByIdAndRemove(_id);
        if (product) {
            console.log("El producto se eliminó correctamente");
        } else {
            console.log("Producto a eliminar no encontrado");
        }
    } catch (error) {
        console.log(`Error al eliminar el producto de la base de datos: ${error}`);
    }
});

export default Productsrouter 
