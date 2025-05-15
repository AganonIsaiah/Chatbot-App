# main.py
from fastapi import FastAPI, Query
from alpaca_client import get_account, list_positions, submit_order, cancel_all_orders

app = FastAPI()

@app.get("/account")
def read_account():
    return get_account()._raw

# Backend -> Frontend
@app.get("/positions")
def read_positions():
    return [p._raw for p in list_positions()]

 # Frontend -> Backend
@app.post("/order")
def create_order(
    symbol: str = Query(...),
    qty: int = Query(...),
    side: str = Query(...),
    order_type: str = Query("market"),
    time_in_force: str = Query("gtc")
):
    return submit_order(symbol, qty, side, order_type, time_in_force)._raw

@app.post("/cancel-orders")
def cancel_orders():
    cancel_all_orders()
    return {"status": "cancelled all orders"}
