# amber

## Description

Amber is a backend service that provides a RESTful API to serve product data from a JSON file. It includes dynamic price calculation based on the current gold price and supports filtering products by price range and popularity score.

## Features

- Serve product data from a JSON file
- Dynamic price calculation based on the current gold price
- Filtering products by price range and popularity score
- Organized project structure with controllers, routes, and services

## Project Structure

amber/
├── .gitignore
├── .env
├── index.js
├── package.json
├── productData.json
├── README.md
├── controllers/
│   └── productController.js
├── routes/
│   └── productRoutes.js
└── services/
    ├── goldPriceService.js
    ├── priceCalculationService.js
    └── productFilterService.js


## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v12 or higher)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/yourusername/amber.git
    cd amber
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Create a `.env` file in the root directory and add your GoldAPI key:**
    ```env
    GOLD_API_KEY=your_api_key_here
    ```

## Running the Server

Start the server with the following command:
```sh
node index.js