from flask import Flask, jsonify, request
from flask_pymongo import PyMongo

app = Flask(__name__) 
app.config["MONGO_URI"] = "mongodb://localhost:27017/myDatabase"
mongo = PyMongo(app)

@app.route("/index", methods=["GET", "POST"])
def index():
    if request.method == "GET":
        return jsonify(message="Get request")
    elif request.method == "POST":
        post = {"task": "hello"}
        mongo.db.todos.insert_one(post)
        return jsonify(message="Post request")
    else:
        return jsonify(message="Request Not Supported")

if __name__ == "__main__":
    app.run(port=4000, debug=True)