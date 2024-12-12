def filter_coin_data(data):
    filtered_data = []
    for coin in data:
        try:
            # Ensure current_price and market_cap are handled correctly
            current_price = coin.get('current_price') or 0.0  # Default to 0.0 if None
            market_cap = coin.get('market_cap') or 0.0  # Default to 0.0 if None
            
            # Handle percentage changes
            price_change_percentage_24h = coin.get('price_change_percentage_24h') or 0.0
            price_change_percentage_1h = coin.get('price_change_percentage_1h_in_currency') or 0.0
            price_change_percentage_7d = coin.get('price_change_percentage_7d_in_currency') or 0.0
            
            filtered_data.append({
                'id': coin['id'],
                'symbol': coin['symbol'],
                'name': coin['name'],
                'current_price': current_price,
                'market_cap': market_cap,
                'price_change_percentage_24h': price_change_percentage_24h,
                'price_change_percentage_1h': price_change_percentage_1h,
                'price_change_percentage_7d': price_change_percentage_7d,
                # ... other fields ...
            })
        except Exception as e:
            logger.error(f"Error filtering coin data: {str(e)}")
    return filtered_data
