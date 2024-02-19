from flask import Flask, request
from flask_cors import CORS
import category, search

app = Flask(__name__)
CORS(app)

@app.post("/export/search")
def search():
    print(1)
    link = request.json.link
    scrapped = search.startScrap(link)
    return scrapped

@app.post("/export/category")
def category():
    link = request.json.link
    scrapped = category.startScrap(link)
    return scrapped

@app.get("/connection/check")
def check_connection():
    return {"ok" : True}