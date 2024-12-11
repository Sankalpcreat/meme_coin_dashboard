import logging
from flask import Blueprint, jsonify, request
from app.services import fetch_meme_coins, fetch_coin_details, fetch_coin_history
from app.utils import filter_coin_data 

bp = Blueprint('api', __name__)
logger = logging.getLogger(__name__)

@bp.get('/meme-coins')
def get_meme_coins():
    """
    Fetch a list of meme coins and send the filtered response.
    """
    try:
        coins = fetch_meme_coins()  
        filtered_coins = filter_coin_data(coins) 
        return jsonify(filtered_coins), 200
    except Exception as e:
        logger.error(f"Error fetching meme coins: {e}")
        return jsonify({"error": "An error occurred while fetching meme coins."}), 500


@bp.get('/coin/<string:coin_id>')
def get_coin_details(coin_id):
    """
    Fetch details for a specific coin.
    """
    try:
        details = fetch_coin_details(coin_id)
        return jsonify(details), 200
    except Exception as e:
        logger.error(f"Error fetching details for coin {coin_id}: {e}")
        return jsonify({"error": f"An error occurred while fetching details for coin {coin_id}."}), 500


@bp.get('/history/<string:coin_id>')
def get_coin_history(coin_id):
    """
    Fetch historical data for a specific coin.
    """
    try:
        days = request.args.get('days', default=7, type=int)
        history = fetch_coin_history(coin_id, days)
        return jsonify(history), 200
    except Exception as e:
        logger.error(f"Error fetching history for coin {coin_id}: {e}")
        return jsonify({"error": f"An error occurred while fetching history for coin {coin_id}."}), 500