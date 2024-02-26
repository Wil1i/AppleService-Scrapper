from flask import Flask, request
from flask_cors import CORS
from category import startScrap as cScrap
from search import startScrap as sScrap

app = Flask(__name__)
CORS(app)

@app.get("/scrapper/")
def home():
    print("HomePage")
    return "<h1>Hello World</h1>"

@app.post("/scrapper/export/search")
def search():
    for_index = request.json['index']
    link = request.json['link']
    scrapped = sScrap(link, for_index)
    return scrapped

@app.post("/scrapper/export/category")
def category():
    for_index = request.json['index']
    link = request.json['link']
    scrapped = cScrap(link, for_index)
    return scrapped

@app.get("/scrapper/connection/check")
def check_connection():
    return {"ok" : True}
