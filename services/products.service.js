import mockedProducts from '../mocks/products.js';
import stocksPrices from '../mocks/stock-price.js';

const queryProducts = () => {
    // This would actually return a Promise
    return mockedProducts;
};

/**
 * Method to get the stock and the price of a particular product by its SKU
 * @param {number} sku Product identifier
 * @returns Either the product's stock and price or undefined.
 */
const queryProductPriceStockBySku = (sku) => {
    const stockPrice = stocksPrices[sku];

    // This would actually return a Promise
    return stockPrice;
};

const productsService = {
    queryProducts,
    queryProductPriceStockBySku,
};

export { productsService };
