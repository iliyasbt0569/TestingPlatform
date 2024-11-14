from flask import Flask, render_template, url_for, request, send_file, redirect
import os, random

from testing_utilities import unpack_docx, get_testing_str, get_all_dirs
from testing import Testing, Test, str_to_Testing, Difficulty

app = Flask(__name__)

@app.route('/testing/<testing_name>', methods=["GET"])
def testing(testing_name):
    ez_count = int(request.args["ez_count"])
    medium_count = int(request.args["medium_count"])
    hard_count = int(request.args["hard_count"])

    if testing_name in get_all_dirs('testings'):
        testing_temp = str_to_Testing(
                get_testing_str(testing_name),
                testing_name
        )
        random.shuffle(testing_temp.tests)
        tests_list = []
        
        for test in testing_temp.tests:
            match test.difficulty:
                case Difficulty.EZ:
                    if ez_count > 0:
                        tests_list.append(test)
                        ez_count -= 1
                case Difficulty.MEDIUM:
                    if medium_count > 0:
                        tests_list.append(test)
                        medium_count -= 1
                case Difficulty.HARD: 
                    if hard_count > 0:
                        tests_list.append(test)
                        hard_count -= 1

        return render_template(
            'testing.html', 
            testing=Testing(testing_temp.name, tests_list)
        )
    return "Not found!"

@app.route('/testing/<testing_name>/config')
def testing_config(testing_name):
    return render_template("testing_config.html", testing_name = testing_name)


@app.route('/submit_test', methods=['POST'])
def submit_test():
    for i in request.form:
        print(i, request.form[i])
    testing_name = request.form["test_name"]
    testing = str_to_Testing(
                get_testing_str(testing_name),
                testing_name
    ).as_json()
    total_point = 0
    #pprint.pprint(testing)
    point_count = 0
    for i in request.form:
        if i == "test_name":
            continue
        if testing[int(i)]["rightvariant"] == request.form[i]:
            point_count += 1
        total_point += 1
    return f"Total point : {point_count}/{total_point}"


@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/testings', methods=['GET'])
def testings():
    testings = get_all_dirs("testings")
    return render_template('testings.html', testings=testings)
    

@app.route('/upload', methods=['POST'])
def upload():
    if 'file' not in request.files:
        return redirect(request.url)
    file = request.files['file']
    if file.filename == '':
        return redirect(request.url)
    if file:
        filename =  file.filename
        file.save(filename)
        unpack_docx(filename, "static")
        return redirect(url_for('testings'))
    else:
        return "Invalid file format", 400
