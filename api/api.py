from flask import Flask, jsonify, request
from flask_restful import Resource, Api, reqparse
from flask_cors import CORS
from add_tasks import add_task

app = Flask("ToDoList")
api = Api(app)

parser = reqparse.RequestParser()
CORS(app, support_credentials=True)


@app.route('/add-task/', methods=['POST'])
def post():
        print('testas1')
        json_response = request.get_json()
        print(request.args)

        add_task('aaa', 'aaa')
        #return json_response, 201


if __name__ == "__main__":
  app.run(debug=True)