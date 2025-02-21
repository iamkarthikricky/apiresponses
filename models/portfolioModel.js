const mongoose = require('mongoose');


const resumeSchema = new mongoose.Schema({
    resumeURL: {
        type: String,
        required: true
    },
});


const htmlSchema = new mongoose.Schema({
    img_url: {
        type: String,
        required: true
    },
    alt_text: {
        type: String,
        required: true
    },
    project_title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
});

const javascriptSchema = new mongoose.Schema({
    img_url: {
        type: String,
        required: true
    },
    alt_text: {
        type: String,
        required: true
    },
    project_title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    project_url: {
        type: String,
        required: true
    },
    github_url: {
        type: String,
        required: true
    },
});

const techniquesSchema = new mongoose.Schema({ 

    tag_name: {
        type: String,
        required: true
    }
 });


const nodejsSchema=new mongoose.Schema({
    project_title: {
        type: String,
        required: true
    },
    project_name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    github_url: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    techniques: [techniquesSchema],
});


const reactjsSchema=new mongoose.Schema({
    project_name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    project_url: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    tagsList: [techniquesSchema],
});


const Resume = mongoose.model('Resume', resumeSchema, "Resume");
const HTML = mongoose.model('HTML', htmlSchema, "HTML");
const Javascript = mongoose.model('Javascript', javascriptSchema, "Javascript");

const NodeJS = mongoose.model('NodeJS', nodejsSchema, "NodeJS");
const ReactJS = mongoose.model('ReactJS', reactjsSchema, "ReactJS");

module.exports = { Resume, HTML, Javascript,NodeJS,ReactJS };
