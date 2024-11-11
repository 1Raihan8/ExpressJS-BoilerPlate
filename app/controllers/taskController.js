// Related to File Upload
// import {UPLOAD_FOLDER} from "../config/config.js";
// import {moveFile} from "../utility/moveFile.js";

// Create

export const createTask = async (req, res) => {
    return res.json({message : "Task Created Successfully"});
}

// Read

export const readTask = async (req, res) => {
    return res.json({message : "Task Read Successfully"});
}

// Update

export const updateTask = async (req, res) => {
    return res.json({message : "Task Updated Successfully"});
}

// Delete

export const deleteTask = async (req, res) => {
    return res.json({message : "Task Deleted Successfully"});
}

// For File Upload
// export const demo1 = async (req, res) => {
//     let myFile = req.files['myFile'];
//     let myFilePath = UPLOAD_FOLDER(myFile.name);
//     await moveFile(myFile, myFilePath);

//     return res.json({message : "File Uploaded Successfully"});
// }