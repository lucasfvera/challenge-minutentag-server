/**
 * Method that returns all the products in the DB
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const getAllProducts = async (req, res) => {
    res.send('product');
};

/**
 * Method that returns a single products by providing the SKU
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const getProductPriceStockBySku = async (req, res) => {
    res.send('stock-price');
};

const productsController = {
    getAllProducts,
    getProductPriceStockBySku,
};

export { productsController };
