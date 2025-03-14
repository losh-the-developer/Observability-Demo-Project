# Orders API Service

This README provides information about the Orders API service within the Observability Demo project.

## Overview

The Orders API is responsible for processing customer orders and communicating with the Payments API to handle payment transactions. It is built using Express and integrates OpenTelemetry for observability, including logging, metrics, and tracing.

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd observability-demo
   ```

2. **Navigate to the Orders API Directory**
   ```bash
   cd services/orders-api
   ```

3. **Install Dependencies**
   ```bash
   npm install
   ```

4. **Run the Service**
   ```bash
   npm start
   ```

   The Orders API will be running on `http://localhost:5001`.

## API Endpoints

### POST /order

- **Description**: Processes a new order and communicates with the Payments API to handle payment.
- **Request Body**:
  ```json
  {
    "orderId": "string",
    "amount": "number"
  }
  ```
- **Response**:
  - **Success**:
    ```json
    {
      "message": "Order processed",
      "paymentStatus": "string"
    }
    ```
  - **Error**:
    ```json
    {
      "error": "Payment failed"
    }
    ```

## Observability

This service is instrumented with OpenTelemetry to provide tracing and metrics. Ensure that the OpenTelemetry collector is set up to receive and process the telemetry data.

## Development

For development, you can modify the source code located in the `src` directory. The main entry point is `app.js`, and the order processing logic is handled in `controllers/orderController.js`.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.