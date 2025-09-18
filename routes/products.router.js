import express from 'express';
import { productsController } from '../controllers/products.controller.js';

const productsRouter = express.Router();

productsRouter.get('/products', productsController.getAllProducts);

productsRouter.get(
    '/stock-price/:sku',
    productsController.getProductPriceStockBySku
);

export { productsRouter };
