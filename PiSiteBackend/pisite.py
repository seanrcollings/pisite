from flask import Flask, jsonify, render_template, send_from_directory, request
from flask_cors import CORS
import json
import sqlite3 
import pdb

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
def data():
    if request.method == 'GET':
        stat_objects = {}
        for stat in get_stats():
            stat_objects[stat[0]] = {"id": stat[0], "title": stat[1], "description": stat[2], "data": fetch_data(stat[3])}
        return json.dumps(stat_objects)

@app.route('/static/<path:path>')
def send_static_asset(path):
    return send_from_directory('static', path)

@app.route('/mastermind/static/<path:path>')
def send_mastermind_static_asset(path):
    return send_from_directory('templates/mastermind/static', path)



# HELPER FUNCTIONS
def add_stat(order, title, subtitle, command, parser, Id):
    try:
        with sqlite3.connect('database/pisite.db') as connection:
            cursor = connection.cursor()
            cursor.execute("INSERT INTO stats (ord, title, subtitle, command, id) values (?, ?, ?, ?, ?);", (order, title, subtitle, command, Id))
            result = {'status': 1, 'message': 'Stat Added'}
    except:
        result = {'status': 0, 'message': 'error, Stat not Added'}
    return result

def get_stats():
    with sqlite3.connect('database/pisite.db') as connection:
        cursor = connection.cursor()
        cursor.execute("SELECT rowid,* FROM stats ORDER BY rowid desc")
        return cursor.fetchall()
 
if __name__ == "__main__":
    app.run()
