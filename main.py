from bottle import Bottle, run, static_file, template
from os.path import dirname, realpath


root_dir = dirname(realpath(__file__))
app = Bottle()


@app.route('/')
def index():
    return template(root_dir+"/index.html")


@app.route('/<name>.svg')
def svg(name):
    return static_file(name + ".svg", root=root_dir)


run(app, host='localhost', port=8080)