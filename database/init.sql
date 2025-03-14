CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    customer_name VARCHAR(255) NOT NULL,
    product VARCHAR(255) NOT NULL,
    quantity INT NOT NULL,
    status VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE payments (
    id SERIAL PRIMARY KEY,
    order_id INT NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    status VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (order_id) REFERENCES orders(id)
);

INSERT INTO orders (customer_name, product, quantity, status) VALUES
('John Doe', 'Widget', 2, 'pending'),
('Jane Smith', 'Gadget', 1, 'completed');

INSERT INTO payments (order_id, amount, status) VALUES
(1, 19.99, 'pending'),
(2, 9.99, 'completed');