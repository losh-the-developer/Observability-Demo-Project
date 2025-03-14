const express = require('express');
const OrderController = require('../controllers/orderController');

const setRoutes = (app) => {
    const orderController = new OrderController();

    app.post('/createOrder', orderController.createOrder.bind(orderController));
    app.get('/getOrder/:id', orderController.getOrder.bind(orderController));
};

module.exports = setRoutes;