# Observability Demo Project

This project demonstrates a microservices architecture with observability features using OpenTelemetry. It includes two services: an Orders API and a Payments API, along with a database for persistence.

## Project Structure

```
observability-demo
├── services
│   ├── orders-api
│   ├── payments-api
├── database
├── docker-compose.yml
└── README.md
```

## Services

### Orders API

- **Description**: Handles order processing and communicates with the Payments API.
- **Entry Point**: `services/orders-api/src/app.js`
- **Documentation**: `services/orders-api/README.md`

### Payments API

- **Description**: Manages payment processing and status retrieval.
- **Entry Point**: `services/payments-api/src/app.js`
- **Documentation**: `services/payments-api/README.md`

## Database

- **Description**: Stores order and payment data.
- **Initialization Script**: `database/init.sql`
- **Documentation**: `database/README.md`

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd observability-demo
   ```


2. **Create the Database and Tables**
**Set up the database**: Follow the instructions in the database README to install PostgreSQL, create the database, and run the initialization script.

3. **Set Up the OpenTelemetry Collector and LGTM Stack** 
   Run the OpenTelemetry Collector and LGTM Stack:
   *  Use the following Docker command to start the OpenTelemetry Collector and the LGTM stack:
   ```
   docker run -p 3000:3000 -p 4317:4317 -p 4318:4318 --rm -ti grafana/otel-lgtm
   ```

4. **Run the services**:
   **Run the Orders API**
   ```
   cd services/orders-api
   npm install
   npm start
   ```

   **Run the Payments  API**
   ```
   cd services/payments-api
   npm install
   npm start
   ```

   **Access the APIs**:
   - Orders API: `http://localhost:5001/order`
   - Payments API: `http://localhost:5002/pay`

## Observability

This project integrates OpenTelemetry for tracing, metrics, and logging across both services, allowing for better monitoring and debugging of the microservices.

## Usage Examples

- To create an order, send a POST request to the Orders API with the necessary order details.
- The Orders API will communicate with the Payments API to process the payment and return the status.

## License

This project is licensed under the MIT License.