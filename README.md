# Apartments Listing

## Description
Listing apartments app

Example: This project is a property listing web application that allows users to browse apartments and view their details. It includes search and filter functionalities to find apartments by unit number, status.


## Installation

### Prerequisites
Before running the project, ensure you have the following installed:
- Docker 

### Step-by-Step Installation

1. Clone the repository:
    ```bash
    git clone git@github.com:omneya-hamroush/apartments_listing.git
    cd yourproject
    ```

2. Start the docker containers:
    ```bash
    docker-compose up
    ```


The application should now be running at `http://localhost:3000`.

## Usage

Describe how to use your application once it’s up and running.

- Go to the apartment listings page to view available apartments.
- Use the filter options to narrow down the search by unit number, status and sale type.

## API Endpoints

### `GET /api/apartments`
Fetch a list of all apartments.

### `GET /api/apartments/:id`
Fetch details of a specific apartment by its ID.

### `POST /api/apartments`
Add a new apartment.
- **Request Body**: 
    ```json
    {
      "unit_number": "101",
      "price": 1200,
      "size": 800,
      "status": "AVAILABLE",
      "building_number": 23,
      "sale_type":"RESALE",
      "compound_id":1
    }
    ```
### `GET /api/apartment/search`
Seach for apartments.
- **Request Body**: 
    ```json
    {
  "unit_number": "333",
  
  "status": "AVAILABLE",
  "sale_type":"DEVELOPER_SALE",
  "min_price":1000,
  "max_price":200000000
  }

    ```


