# Minutentag Node + Express Challenge - Backend

This is a mock API server built with Node.js + Express.js to serve a client application built with React.
It is for a Beer E-Commerce site.

Frontend Repo: https://github.com/lucasfvera/challenge-minutentag-client

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [pnpm](https://pnpm.io/)

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone ...
    cd server
    ```

2.  **Install dependencies:**
    ```bash
    pnpm install
    ```

3.  **Environment Variables:**
    This project uses a `.env` file for environment variables. A sample is provided below:
    ```
    PORT=5001
    ```
    The server will run on the port specified in this file.

## Development

To run the server in development mode (with watch), run the following command:

```bash
pnpm dev
```

The server will be available at [http://localhost:5001](http://localhost:5001).

## Production

To run the server in production mode, use the following command:

```bash
pnpm start
```

## Testing

Since this was a mock server there are no tests in place. This should be a future improvement./
Suggested library to implement the tests: `supertest`.

## Endpoints

The following endpoints are available:

### `GET /api/products`

Returns a list of all products.

**Example Response:**
```json
[
    {
        "id": 127,
        "brand": "Modelo Especial",
        "image": "/products/modelo-especial.jpeg",
        "style": "Lager",
        "substyle": "Light Lager",
        "abv": "4.4%",
        "origin": "Import",
        "information": "...",
        "skus": [
            {
                "code": "10167",
                "name": "12 - 24oz Cans"
            }
        ]
    }
]
```

### `GET /api/stock-price/:sku`

Returns the stock and price for a given product SKU.

**Example Request:**
```
GET /api/stock-price/10167
```

**Example Response:**
```json
{
    "stock": 130,
    "price": 2865
}
```

**Error Responses:**

- `400 Bad Request`: If the SKU is not a valid number.
  ```json
  {
      "status": 400,
      "message": "Invalid product SKU.",
      "detail": "The provided SKU is not a valid number. You should provide a 5 digit number."
  }
  ```
- `404 Not Found`: If the SKU does not exist.
  ```json
  {
      "status": 404,
      "message": "Product price-stock not found.",
      "detail": "The product's price-stock for that SKU doesn't exist."
  }
  ```