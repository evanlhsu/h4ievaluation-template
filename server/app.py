from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
from flask_cors import CORS
import ast
import json
from bson.objectid import ObjectId

app = Flask(__name__) 
CORS(app)
app.config["MONGO_URI"] = "mongodb://localhost:27017/myDatabase"
mongo = PyMongo(app)

@app.route("/", methods=["GET"])
def index():
    if request.method == "GET":
        documents = mongo.db.todos.find()
        response = []
        for document in documents:
            document['_id'] = str(document['_id'])
            response.append(document)
        return jsonify(response)

@app.route("/", methods=["POST"])
def add():
    if request.method == "POST":
        byte_str = request.data
        dict_str = byte_str.decode("UTF-8")
        mydata = ast.literal_eval(dict_str)
        result = mongo.db.todos.insert_one(mydata)
        return str(result.inserted_id)

@app.route("/", methods=["DELETE"])
def delete():
    if request.method == "DELETE":
        byte_str = request.data
        dict_str = byte_str.decode("UTF-8")
        mydata = ast.literal_eval(dict_str)
        id = mydata['_id']
        mongo.db.todos.delete_one({"_id": ObjectId(id)})
        return jsonify(message="successful delete request")

if __name__ == "__main__":
    app.run(port=4000, debug=True)