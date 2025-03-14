# Payments API Documentation

## Overview

The Payments API is a microservice responsible for processing payments in the observability demo project. It communicates with the Orders API to handle payment requests and provides endpoints for payment processing and status retrieval.

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd observability-demo/services/payments-api
   ```

2. **Install Dependencies**
   Ensure you have Node.js installed, then run:
   ```bash
   npm install
   ```

3. **Environment Variables**
   Set up any necessary environment variables required for the service. You may need to configure database connection strings or API keys.

4. **Run the Service**
   Start the Payments API service:
   ```bash
   npm start
   ```

   The service will be available at `http://localhost:5002`.

## API Endpoints

### POST /pay

- **Description**: Processes a payment.
- **Request Body**:
  ```json
  {
    "amount": "number",
    "currency": "string",
    "paymentMethod": "string"
  }
  ```
- **Response**:
  - **Success**: Returns payment status.
  - **Error**: Returns error message.

### GET /status/:paymentId

- **Description**: Retrieves the status of a payment.
- **Response**:
  - **Success**: Returns payment status details.
  - **Error**: Returns error message.

## Logging, Metrics, and Tracing

The Payments API is instrumented with OpenTelemetry for logging, metrics, and tracing. Ensure that the OpenTelemetry collector is set up to receive and process telemetry data.

## Usage Examples

### Example Payment Request

```bash
curl -X POST http://localhost:5002/pay -H "Content-Type: application/json" -d '{"amount": 100, "currency": "USD", "paymentMethod": "credit_card"}'
```

### Example Payment Status Request

```bash
curl -X GET http://localhost:5002/status/{paymentId}
```

## Conclusion

This Payments API service is a crucial component of the observability demo project, enabling seamless payment processing and integration with the Orders API. For further details, refer to the source code and comments within the implementation files.