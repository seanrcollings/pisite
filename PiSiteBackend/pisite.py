from flask import Flask, jsonify, render_template, send_from_directory, request
from flask_cors import CORS
import json
import sqlite3 

from dataFetcher import fetch_data

app = Flask(__name__)
cors = CORS(app, resources={r"/stats/*": {"origins": "*"}})

#ROUTES

@app.route('/', defaults={'path':''})
@app.route('/<path:path>')
def catch_all(path):
    return render_template('index.html')

@app.route('/mastermind/index.html')
def mastermind():
    return render_template('mastermind/index.html')

@app.route('/stats/data', methods=['GET', 'POST'])
def get_data():
    if request.method == 'GET':
        stat_objects = {}
        for stat in get_stats():
            stat_objects[stat[5]] = {"id": stat[5], "data": fetch_data(stat[3]), "description": stat[2], "title": stat[1], "order": stat[0]}
        return json.dumps(stat_objects)

    elif request.method == 'POST':
        pass
        # TO DO: FIX the POST so the stats aren't added in as unicode
        # data = request.form
        # result = add_stat(data['order'], data['title'], data['subtitle'], data['command'], data['parser'], data['id'])
        # return jsonify(result)

@app.route('/static/<path:path>')
def send_static_asset(path):
    return send_from_directory('static', path)

@app.route('/mastermind/static/<path:path>')
def send_mastermind_static_asset(path):
    return send_from_directory('templates/mastermind/static', path)

@app.route('/hello')
def hello():
    return 'Hello World'


# HELPER FUNCTIONS
def add_stat(order, title, subtitle, command, parser, Id):
    try:
        with sqlite3.connect('pisite.db') as connection:
            connection.text_factory = str
            cursor = connection.cursor()
            cursor.execute("INSERT INTO stats (ord, title, subtitle, command, id) values (?, ?, ?, ?, ?);", (order, title, subtitle, command, Id))
            result = {'status': 1, 'message': 'Stat Added'}
    except:
        result = {'status': 0, 'message': 'error'}
    return result

def get_stats():
    with sqlite3.connect('pisite.db') as connection:
        connection.text_factory = str
        cursor = connection.cursor()
        cursor.execute("SELECT * FROM stats ORDER BY ord desc")
        all_stats = cursor.fetchall()
        print(all_stats)
        return all_stats
 
if __name__ == "__main__":
    app.run()
    