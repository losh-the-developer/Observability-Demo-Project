const express = require('express');
const PaymentController = require('../controllers/paymentController');

const setRoutes = (app) => {
    const paymentController = new PaymentController();

    app.post('/payment', paymentController.createPayment.bind(paymentController));
    app.get('/payment/:id', paymentController.getPayment.bind(paymentController));
};

module.exports = setRoutes;