import requests
import logging
from app.utils import filter_coin_data

logger = logging.getLogger(__name__)
BASE_URL = "https://api.coingecko.com/api/v3"

def fetch_meme_coins():
    try:
        url = f"{BASE_URL}/coins/markets"
        params = {
            "vs_currency": "inr",
            "category": "meme-token",
            "order": "market_cap_desc",
            "per_page": 50,
            "page": 1,
            "sparkline": False,
            "price_change_percentage": "1h,24h,7d"
        }
        
        print(f"Fetching data from: {url}")
        response = requests.get(url, params=params, timeout=10)
        response.raise_for_status()
        
        data = response.json()
        print(f"Received data: {data[:2]}")
        return filter_coin_data(data)
    except Exception as e:
        print(f"Error in fetch_meme_coins: {str(e)}")
        return []

def fetch_coin_details(coin_id):
    try:
        url = f"{BASE_URL}/coins/{coin_id}"
        response = requests.get(
            url,
            params={
                "tickers": False,
                "community_data": False,
                "developer_data": False,
                "sparkline": False
            },
            timeout=10
        )
        response.raise_for_status()
        return response.json()
    except requests.RequestException as e:
        logger.error(f"Error fetching coin details for {coin_id}: {str(e)}")
        raise Exception(f"Failed to fetch coin details: {str(e)}")

def fetch_coin_history(coin_id, days=7):
    try:
        url = f"{BASE_URL}/coins/{coin_id}/market_chart"
        response = requests.get(
            url,
            params={"vs_currency": "inr", "days": days},
            timeout=10
        )
        response.raise_for_status()
        return response.json()
    except requests.RequestException as e:
        logger.error(f"Error fetching coin history for {coin_id}: {str(e)}")
        raise Exception(f"Failed to fetch coin history: {str(e)}")