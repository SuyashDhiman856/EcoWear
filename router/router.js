const express = require('express');
const path = require('path');
const router = express.Router();
const products = require('../data/products');

router.get("/", (req, res) => {
    res.render('home', {
        products: products.products
    });
})

router.get('/products', (req, res) => {
    res.render('products', {
        products: products.products
    });
})

router.get('/products/product1', (req, res) => {
    res.render("product/1", {
        products: products.products[0]
    });
})

router.get('/products/product2', (req, res) => {
    res.render("product/2", {
        products: products.products[1]
    });
})

router.get('/products/product3', (req, res) => {
    res.render("product/3", {
        products: products.products[2]
    });
})

router.get('/products/product4', (req, res) => {
    res.render("product/4", {
        products: products.products[3]
    });
})

router.get('/products/product5', (req, res) => {
    res.render("product/5", {
        products: products.products[4]
    });
})

router.get('/products/product6', (req, res) => {
    res.render("product/6", {
        products: products.products[5]
    });
})

router.get('/your-cart', (req, res) => {
    res.render("your-cart");
})

router.get('/your-account', (req, res) => {
    res.render('your-account');
})

router.get('/images/:image', (req, res) => {
    res.sendFile(path.join(__dirname, `../static/images/${req.params.image}`));
})

module.exports = router;
