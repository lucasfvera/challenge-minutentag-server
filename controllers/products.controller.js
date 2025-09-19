import httpStatus from 'http-status';
import { productsService } from '../services/products.service.js';

/**
 * Method that returns all the products in the DB
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const getAllProducts = async (req, res) => {
    // TODO: Handle filters for a single product
    const products = await productsService.queryProducts();
    res.send({ status: httpStatus.OK, data: products });
};

/**
 * Method that returns a single products by providing the SKU
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const getProductPriceStockBySku = async (req, res) => {
    const stringSku = req.params.sku;
    const sku = parseInt(stringSku);

    if (isNaN(sku)) {
        res.status(httpStatus.BAD_REQUEST).send({
            status: httpStatus.BAD_REQUEST,
            message: 'Invalid product SKU.',
            detail: 'The provided SKU is not a valid number. You should provide a 5 digit number.',
        });
    }

    const productPriceStock = await productsService.queryProductPriceStockBySku(
        sku
    );

    if (!productPriceStock) {
        res.status(httpStatus.NOT_FOUND).send({
            status: httpStatus.NOT_FOUND,
            message: 'Product price-stock not found.',
            detail: "The product's price-stock for that SKU doesn't exist.",
        });
    }

    res.send({ status: httpStatus.OK, data: productPriceStock });
};

const productsController = {
    getAllProducts,
    getProductPriceStockBySku,
};

export { productsController };
