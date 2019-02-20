from flask import Flask, jsonify, render_template, send_from_directory

from dataFetcher import fetch_data

app = Flask(__name__)
 
# @app.route('/', defaults={'path':''})
# @app.route('/<path:path>')
# def catch_all(path):
#     return render_template('index.html')

# @app.route('/mastermind/index.html')
# def mastermind():
#     return render_template('mastermind/index.html')

@app.route('/data.json')
def get_data():
    return jsonify(fetch_data())

@app.route('/static/<path:path>')
def send_static_asset(path):
    return send_from_directory('static', path)

@app.route('/mastermind/static/<path:path>')
def send_mastermind_static_asset(path):
    return send_from_directory('templates/mastermind/static', path)

@app.route('/hello')
def hello():
    return 'Hello World'
 
if __name__ == "__main__":
    app.run()
