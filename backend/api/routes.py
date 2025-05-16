#api/routes.py
from fastapi import APIRouter, Query
from .alpaca_client import get_account, list_positions, submit_order, cancel_all_orders

router = APIRouter()

@router.get("/account")
def read_account():
    return get_account()._raw  # Returns raw account data

@router.get("/positions")
def read_positions():
    return [p._raw for p in list_positions()]  # Returns raw positions data

@router.post("/order")
def create_order(
    symbol: str = Query(..., min_length=1, max_length=5),  # Basic validation
    qty: int = Query(..., gt=0),  # Quantity must be > 0
    side: str = Query(..., regex="^(buy|sell)$"),  # Only allows "buy" or "sell"
    order_type: str = Query("market", regex="^(market|limit)$"),
    time_in_force: str = Query("gtc", regex="^(gtc|ioc|fok)$")
):
    return submit_order(symbol, qty, side, order_type, time_in_force)._raw

@router.post("/cancel-orders")
def cancel_orders():
    cancel_all_orders()
    return {"status": "All orders cancelled"}