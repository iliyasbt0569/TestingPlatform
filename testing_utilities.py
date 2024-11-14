import os
import zipfile
import lxml
import lxml.etree
import shutil
from flask import Flask, render_template, url_for, request
import re

testings_dir = "testings"

def get_all_dirs(dist_dir: str):
    all_items = os.listdir(dist_dir)
    return [item for item in all_items if os.path.isdir(os.path.join(dist_dir, item))]


def get_rels_xml(path_to_dir : str) -> str:
    with open(os.path.join(path_to_dir, "word", "_rels", "document.xml.rels"), 'rb') as file:
        return file.read();


def get_doc_xml(path_to_dir : str) -> str:
    with open(os.path.join(path_to_dir, "word", "document.xml"), 'rb') as file:
        return file.read();


def get_Target_by_Id(Id : str, rels_list): 
    for dict in rels_list:
        if dict.get("Id") == Id:
            return dict.get("Target")

def convert_image_string(input_string):
    pattern = r"\{\{([A-Za-z0-9/\\._-]+)\}\}"
    match = re.search(pattern, input_string)
    if match:
        image_path = match.group(1)
        img_tag = f'''<img src="{url_for('static', filename=f'{image_path}')}" width="15"/>'''
        return input_string.replace(match.group(0), img_tag)
    return input_string


def create_testing_file(testing_name : str, static_path : str):
    doc_xml = get_doc_xml(os.path.join(testings_dir, testing_name))
    rels_xml = get_rels_xml(os.path.join(testings_dir, testing_name))

    rels_xml_root = lxml.etree.fromstring(rels_xml)
    rels_list = []
    for element in rels_xml_root.iter():
        rels_list.append(element.attrib)

    testing_str = ""
    doc_xml_root = lxml.etree.fromstring(doc_xml)
    for element in doc_xml_root.iter():
        localname = element.tag.split('}')[-1]
        if localname == 'p':
            testing_str += '\n'
        if element.text:
            testing_str += element.text
        if localname == 'blip':
            for i in element.attrib.keys():
                if 'embed' in i:
                    testing_str += convert_image_string(
                        f"{{{{{
                            testing_name + '/' +
                            get_Target_by_Id(
                                element.attrib.get(i), 
                                rels_list
                        )}}}}}"
                    )
    with open(os.path.join(testings_dir, testing_name+".txt"), 'w', encoding="utf-8") as testing_str_file:
        testing_str_file.write(testing_str)


def unpack_docx(docx_path : str, static_path : str):
    doc_name = docx_path.split('.')[0]

    if os.path.exists(docx_path):
        os.rename(docx_path, doc_name+".zip")
        with zipfile.ZipFile(doc_name+".zip", 'r') as myzip:
            myzip.extractall(os.path.join(testings_dir, doc_name))
        #os.rename(doc_name+".zip", doc_name+".docx")
        os.remove(doc_name+".zip")

    if os.path.exists(os.path.join(static_path, doc_name)):
        pass # Error handle
    os.mkdir(os.path.join(static_path, doc_name))
    shutil.move(
        os.path.join(testings_dir, doc_name, "word", "media"), 
        os.path.join(static_path, doc_name)
    )

    create_testing_file(doc_name, static_path)

def get_testing_str(testing_name) -> str:
    with open(os.path.join(testings_dir, testing_name+".txt"), 'r', encoding="utf-8") as file:
        return file.read()
