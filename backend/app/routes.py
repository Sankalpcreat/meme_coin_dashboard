import logging
from flask import Blueprint, jsonify, request
from app.services import fetch_meme_coins, fetch_coin_details, fetch_coin_history

bp = Blueprint('api', __name__)
logger = logging.getLogger(__name__)

@bp.get('/meme-coins')
def get_meme_coins():
    try:
        coins = fetch_meme_coins()
        return jsonify(coins), 200
    except Exception as e:
        logger.error(f"Error in get_meme_coins: {str(e)}")
        return jsonify({"error": str(e)}), 500


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