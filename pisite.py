from flask import Flask, jsonify, render_template, send_from_directory, request
import json
import sys 

from models.stat import Stat


app = Flask(__name__, static_url_path='/')

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
        for stat in Stat.fetch_all():
            stat_objects[stat.rowid] = {"id": stat.rowid, "title": stat.title, "description": stat.subtitle, "data": stat.fetch_data()}
        return json.dumps(stat_objects)

@app.route('/static/<path:path>')
def send_static_asset(path):
    return send_from_directory('templates/static', path)

@app.route('/mastermind/static/<path:path>')
def send_mastermind_static_asset(path):
    return send_from_directory('templates/mastermind/static', path)
 
if __name__ == "__main__":
    app.run()
