const { Pool } = require('pg');

class PaymentController {
    constructor() {
        this.pool = new Pool({
            connectionString: process.env.DATABASE_URL,
        });
    }

    async createPayment(req, res) {
        const { order_id, amount, status } = req.body;
        const result = await this.pool.query(
            'INSERT INTO payments (order_id, amount, status) VALUES ($1, $2, $3) RETURNING *',
            [order_id, amount, status]
        );
        res.json(result.rows[0]);
    }

    async getPayment(req, res) {
        const { id } = req.params;
        const result = await this.pool.query('SELECT * FROM payments WHERE id = $1', [id]);
        res.json(result.rows[0]);
    }
}

module.exports = PaymentController;