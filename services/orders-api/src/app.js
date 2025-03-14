require('./tracing');
require('dotenv').config();
const express = require('express');
const { trace } = require('@opentelemetry/api');
const setRoutes = require('./routes/orderRoutes');

const app = express();
const port = 5001;

app.use(express.json());
setRoutes(app);

app.listen(port, () => {
    const tracer = trace.getTracer('orders-api');
    const span = tracer.startSpan('starting-server');
    console.log(`Orders API running on port ${port}`);
    span.end();
});