const {Resume,HTML,Javascript,NodeJS,ReactJS} = require("../models/portfolioModel");


const getResume = async (req, res) => {

    try {
        const resume = await Resume.find();
        res.status(200).json(resume);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const postResume = async (req, res) => {
    try {
        const { resumeURL } = req.body; // Extract data from request

        // Create a new Resume document
        const newResume = new Resume({
           resumeURL
        });

        // Save to MongoDB
        await newResume.save();

        res.status(201).json({ message: "Resume added successfully", data: newResume });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getHTML = async (req, res) => {
    try {
        const resume = await HTML.find();
        res.status(200).json(resume);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const getJavascript = async (req, res) => {
    try {
        const resume = await Javascript.find();
        res.status(200).json(resume);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const getNodejs = async (req, res) => {
    try {
        const resume = await NodeJS.find();
        res.status(200).json(resume);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getreactjs = async (req, res) => {
    try {
        const resume = await ReactJS.find();
        res.status(200).json(resume);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};




const postHTML = async (req, res) => {
    try {
        const htmlData = req.body; // Expecting an array of objects

        // Check if the request body is an array
        if (!Array.isArray(htmlData)) {
            return res.status(400).json({ message: "Invalid input. Expected an array of objects." });
        }

        // Filter the required fields from each object
        const filteredData = htmlData.map(item => ({
            img_url: item.img_url,
            alt_text: item.alt_text,
            project_title: item.project_title,
            description: item.description,
            url: item.url
        }));

        // Insert multiple filtered documents into MongoDB
        const insertedDocs = await HTML.insertMany(filteredData);

        res.status(201).json({ message: "HTML projects added successfully", data: insertedDocs });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const postJavascript = async (req, res) => {
    try {
        const htmlData = req.body; // Expecting an array of objects

        // Check if the request body is an array
        if (!Array.isArray(htmlData)) {
            return res.status(400).json({ message: "Invalid input. Expected an array of objects." });
        }

        // Filter the required fields from each object
        const filteredData = htmlData.map(item => ({
            img_url: item.img_url,
            alt_text: item.alt_text,
            project_title: item.project_title,
            description: item.description,
            project_url: item.project_url,
            github_url: item.github_url,
        }));

        // Insert multiple filtered documents into MongoDB
        const insertedDocs = await Javascript.insertMany(filteredData);

        res.status(201).json({ message: "HTML projects added successfully", data: insertedDocs });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const postNodejs = async (req, res) => {
    try {
        const htmlData = req.body; // Expecting an array of objects

        // Check if the request body is an array
        if (!Array.isArray(htmlData)) {
            return res.status(400).json({ message: "Invalid input. Expected an array of objects." });
        }

        // Filter the required fields from each object
        const filteredData = htmlData.map(item => ({
            project_title: item.project_title,
            project_name: item.project_name,
            description: item.description,
            github_url: item.github_url,
            category: item.category,
            techniques: item.techniques.map(tech => ({ tag_name: tech.tag_name }))
        }));

        // Insert multiple filtered documents into MongoDB
        const insertedDocs = await NodeJS.insertMany(filteredData);

        res.status(201).json({ message: "HTML projects added successfully", data: insertedDocs });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const postreactjs = async (req, res) => {
    try {
        const htmlData = req.body; // Expecting an array of objects

        // Check if the request body is an array
        if (!Array.isArray(htmlData)) {
            return res.status(400).json({ message: "Invalid input. Expected an array of objects." });
        }

        // Filter the required fields from each object
        const filteredData = htmlData.map(item => ({
           
            project_name: item.project_name,
            description: item.description,
            project_url: item. website_url,
            category: item.category,
            tagsList: item.tagsList.map(tech => ({ tag_name: tech.tag_name }))
        }));

        // Insert multiple filtered documents into MongoDB
        const insertedDocs = await ReactJS.insertMany(filteredData);

        res.status(201).json({ message: "HTML projects added successfully", data: insertedDocs });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



module.exports = { getResume,postResume,getHTML,getJavascript,getNodejs,getreactjs,postHTML, postJavascript,postNodejs,postreactjs}; // Export the controller functions};