# Meme Coin API

A simple Flask application that provides an API for fetching information about meme coins, including their details and historical data.

## Table of Contents

- [Meme Coin API](#meme-coin-api)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Installation](#installation)
  - [Usage](#usage)
  - [API Endpoints](#api-endpoints)
    - [Get Meme Coins](#get-meme-coins)
    - [Get Coin Details](#get-coin-details)
    - [Get Coin History](#get-coin-history)
  - [Contributing](#contributing)
  - [License](#license)

## Features

- Fetch a list of meme coins.
- Get detailed information about a specific coin.
- Retrieve historical data for a specific coin.

## Technologies Used

- Python
- Flask
- Flask-Caching
- Requests

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/meme-coin-api.git
   cd meme-coin-api/backend
   ```

2. Create a virtual environment:

   ```bash
   python -m venv venv
   ```

3. Activate the virtual environment:

   - On macOS/Linux:

     ```bash
     source venv/bin/activate
     ```

   - On Windows:

     ```bash
     venv\Scripts\activate
     ```

4. Install the required packages:

   ```bash
   pip install -r requirements.txt
   ```

## Usage

1. Start the Flask application:

   ```bash
   python run.py
   ```

2. The application will run on `http://127.0.0.1:5001`.

## API Endpoints

### Get Meme Coins

- **Endpoint**: `/api/meme-coins`
- **Method**: `GET`
- **Description**: Fetch a list of meme coins.

### Get Coin Details

- **Endpoint**: `/api/coin/<coin_id>`
- **Method**: `GET`
- **Description**: Fetch details for a specific coin.
- **Parameters**:
  - `coin_id`: The ID of the coin.

### Get Coin History

- **Endpoint**: `/api/history/<coin_id>`
- **Method**: `GET`
- **Description**: Fetch historical data for a specific coin.
- **Parameters**:
  - `coin_id`: The ID of the coin.
  - `days`: (Optional) Number of days of historical data to fetch (default is 7).

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.