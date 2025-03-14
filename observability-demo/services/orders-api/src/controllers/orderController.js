const { Pool } = require('pg');
const axios = require('axios');

class OrderController {
    constructor() {
        console.log('connection string:', process.env.DATABASE_URL);
        this.pool = new Pool({
            connectionString: process.env.DATABASE_URL,
        });
    }

    async createOrder(req, res) {
        const { customer_name, product, quantity, status } = req.body;
        try {
            const result = await this.pool.query(
                'INSERT INTO orders (customer_name, product, quantity, status) VALUES ($1, $2, $3, $4) RETURNING *',
                [customer_name, product, quantity, status]
            );

            // Make a request to the payments-api service
            const paymentResponse = await axios.post('http://localhost:5002/pay', {
                order_id: result.rows[0].id,
                amount: 100.00, // Example amount, replace with actual logic
                status: 'pending'
            });

            res.json({
                order: result.rows[0],
                payment: paymentResponse.data
            });
        } catch (err) {
            console.error('Error executing query', err.stack);
            res.status(500).send('Error creating order');
        }
    }

    async getOrder(req, res) {
        const { id } = req.params;
        const result = await this.pool.query('SELECT * FROM orders WHERE id = $1', [id]);
        res.json(result.rows[0]);
    }
}

module.exports = OrderController;