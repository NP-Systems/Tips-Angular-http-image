# -*- coding: utf-8 -*-
from flask import Flask
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

@app.route('/',methods=["GET","POST"])
def hello():
    name = "Hello World"
    return json.dumps({'name':name})

if __name__ == "__main__":
    app.run(host='127.0.0.1',debug=True)
