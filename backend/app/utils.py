def filter_coin_data(data):
    
    return [
        {
            "id": coin.get("id"),
            "name": coin.get("name"),
            "symbol": coin.get("symbol"),
            "current_price": coin.get("current_price"),
            "market_cap": coin.get("market_cap"),
            "price_change_percentage_24h": coin.get("price_change_percentage_24h")
        }
        for coin in data if "id" in coin
    ]
