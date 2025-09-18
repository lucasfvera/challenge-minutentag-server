import express from 'express';
import { productsRouter } from './products.router.js';

const router = express.Router();

const routes = [
    {
        path: '/',
        router: productsRouter,
    },
];

routes.forEach((route) => {
    router.use(route.path, route.router);
});

export { router };
