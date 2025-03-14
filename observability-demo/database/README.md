# Database Setup Documentation

This directory contains the SQL initialization script and documentation for setting up the database used in the observability demo project.

## Initialization Script

The `init.sql` file contains the SQL commands necessary to create the database schema and seed it with initial data. To set up the database, follow these steps:

## Install PostgreSQL Locally

1. **Download and Install PostgreSQL**:
   - Download PostgreSQL from the [official website](https://www.postgresql.org/download/).
   - Follow the installation instructions for your operating system.

2. **Start PostgreSQL**:
   - Ensure that the PostgreSQL server is running. You can start it using the PostgreSQL service manager or command line tools.

## Create the Database and Tables

3. **Create the Database**:
   - Open pgAdmin or use the `psql` command-line tool to create a new database named `app_db`.

   ```sql
   CREATE DATABASE app_db;

2. **Run the initialization script**: Execute the `init.sql` script to create the necessary tables and insert initial data. You can do this by running the following command:

   ```sql
   SOURCE path/to/init.sql;
   ```

   Replace `path/to/init.sql` with the actual path to the `init.sql` file.

## Database Structure

The database schema includes tables for storing orders and payments, along with any necessary relationships between them. Refer to the `init.sql` file for detailed table definitions and relationships.

## Additional Information

For any issues or questions regarding the database setup, please refer to the main project documentation or contact the project maintainers.