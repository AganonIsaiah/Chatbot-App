#api/alpaca_client.py
import os
from dotenv import load_dotenv
import alpaca_trade_api as tradeapi

load_dotenv()

ALPACA_API_KEY = os.getenv("ALPACA_API_KEY")
ALPACA_SECRET_KEY = os.getenv("ALPACA_SECRET_KEY")
BASE_URL = "https://paper-api.alpaca.markets"  # Note: Typo in "markets"

api = tradeapi.REST(ALPACA_API_KEY, ALPACA_SECRET_KEY, base_url=BASE_URL)

def get_account():
    return api.get_account()

def list_positions():
    return api.list_positions()

def submit_order(symbol: str, qty: int, side: str, order_type="market", time_in_force="gtc"):
    return api.submit_order(
        symbol=symbol,
        qty=qty,
        side=side,
        type=order_type,
        time_in_force=time_in_force
    )

def cancel_all_orders():
    return api.cancel_all_orders()