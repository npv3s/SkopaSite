from bottle import Bottle, run, static_file, template
from os.path import dirname, realpath
import sys


root_dir = dirname(realpath(__file__))
app = Bottle()


@app.route('/')
def index():
    return template(root_dir+"/index.html")


@app.route('/<name>.svg')
def svg(name):
    return static_file(name + ".svg", root=root_dir)


@app.route('/<name>.ttf')
def font(name):
    return static_file(name + ".ttf", root=root_dir)


@app.route('/style.css')
def style():
    return static_file("style.css", root=root_dir)


@app.route('/script.js')
def js():
    return static_file("script.js", root=root_dir)


if len(sys.argv) > 1:
    if sys.argv[1] == 'debug':
        run(app, host='0.0.0.0', port=8080, debug=True)
