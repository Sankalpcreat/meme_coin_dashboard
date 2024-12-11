import requests
from app.utils import filter_coin_data

BASE_URL = "https://api.coingecko.com/api/v3"

def fetch_meme_coins():
    
    url = f"{BASE_URL}/coins/markets"
    params = {
        "vs_currency": "usd",
        "category": "meme-token",
        "order": "market_cap_desc",
        "per_page": 50,
        "page": 1,
        "sparkline": False
    }
    response = requests.get(url, params=params)
    if response.status_code == 200:
        data = response.json()
        return filter_coin_data(data) 
    else:
        raise Exception(f"Failed to fetch meme coins, Status code: {response.status_code}")

def fetch_coin_details(coin_id):
    
    url = f"{BASE_URL}/coins/{coin_id}"
    response = requests.get(url, params={"tickers": False, "community_data": False, "developer_data": False, "sparkline": False})
    if response.status_code == 200:
        return response.json()
    else:
        raise Exception(f"Failed to fetch details for coin: {coin_id}. Status code: {response.status_code}")

def fetch_coin_history(coin_id, days=7):
    
    url = f"{BASE_URL}/coins/{coin_id}/market_chart"
    params = {"vs_currency": "usd", "days": days}
    response = requests.get(url, params=params)
    if response.status_code == 200:
        return response.json()
    else:
        raise Exception(f"Failed to fetch history for coin: {coin_id}. Status code: {response.status_code}")