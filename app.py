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
    print(1)
    link = request.json['link']
    scrapped = sScrap(link)
    return scrapped

@app.post("/scrapper/export/category")
def category():
    link = request.json['link']
    scrapped = cScrap(link)
    return scrapped

@app.get("/scrapper/connection/check")
def check_connection():
    return {"ok" : True}
