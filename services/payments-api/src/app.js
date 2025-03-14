require('./tracing');
require('dotenv').config();
const express = require('express');
const { trace } = require('@opentelemetry/api');
const axios = require('axios');
const setRoutes = require('./routes/paymentRoutes');
const app = express();
const port = 5002;

app.use(express.json());

setRoutes(app);

app.post('/pay', async (req, res) => {
    const tracer = trace.getTracer('payments-api');
    const span = tracer.startSpan('processing-payment');

    try {
        const { order_id, amount, status } = req.body;

        // Simulate payment processing logic
        const paymentStatus = 'success'; // This would be replaced with actual payment logic
        span.setAttribute('payment-status', paymentStatus);

        // Make a request to the orders-api service to update the order status
        const orderResponse = await axios.get(`http://localhost:5001/getOrder/${order_id}`);

        res.json({
            message: 'Payment processed',
            status: paymentStatus,
            order: orderResponse.data
        });
    } catch (error) {
        console.error('Error processing payment:', error.stack);
        span.recordException(error);
        res.status(500).json({ error: 'Payment processing failed' });
    } finally {
        span.end();
    }
});

app.listen(port, () => console.log(`Payments API running on port ${port}`));