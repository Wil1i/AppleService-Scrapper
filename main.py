from flask import Flask, request

app = Flask(__name__)

@app.post("/export/search")
def search():
    data = request.args
    print(data)
    return "<p>Hello, World!</p>"

@app.post("/export/category")
def category():
    data = request.args
    return "<p>Hello, World!</p>"