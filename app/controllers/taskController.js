// File Upload
import * as path from "node:path";

// Token Encode, Decode
import {DecodeToken, EncodeToken} from "../utility/tokenUtility.js";

// Send Email
import {EmailSend} from "../utility/emailUtility.js";

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

// File Upload

export const fileUpload = async (req, res) => {
    let myFile = req.files['myFile'];
    let myFileName = myFile.name;

    let myFilePath = path.resolve(process.cwd(), "storage", myFileName);

    myFile.mv(myFilePath, (err) => {
        if (err) {
            return res.json({message : "File Uploaded Failed"});
        }
        else{
            return res.json({message : "File Uploaded Successfully"});
        }
    })
}

// Token Encode

export const tokenEncode = async (req, res) => {
    let code = EncodeToken("raihanUddinemon180@gmail.com", "1234");
    res.json({token:code});
}

// Token Decode

export const tokenDecode = async (req, res) => {
    let code = DecodeToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhaWhhblVkZGluZW1vbjE4MEBnbWFpbC5jb20iLCJ1c2VyX2lkIjoiMTIzNCIsImlhdCI6MTczMTkxNTU5MiwiZXhwIjoxNzM0NTA3NTkyfQ.iEmOqLVshUfDe6Gw3Tj9o7RC9jvp25_SVsPzY_zQAxA");
    res.json({token:code});
}

// Send Email

export const email = async (req, res) => {
    let EmailTo = "raihanuddinemon05@gmail.com";
    let EmailText = "Hi, this is email sender";
    let EmailSubject = "Send Email";
    let EmailHTMLBody = "Hi, this is email body";

    let result = await EmailSend(EmailTo, EmailText, EmailSubject, EmailHTMLBody);
    res.json({EmailStatus: true});
}

// Profile (Middleware)

export const profile = async (req, res) => {
    res.json({status: "Ok"});
}

// Create Cookies

export const createCookies = async (req, res) => {
    let cookieOptions = {
        expires: new Date(Date.now() + 3600*1000),    // 1 hour = 3600 seconds and have to convert it to millisecond
        httpOnly: true,
        sameSite: true,
    }

    let cookieName = "Email";
    let data = "raihanuddinemon05@gmail.com";

    res.cookie(cookieName, data, cookieOptions);

    res.json({status: "Ok"});
}

// Delete Cookies

export const deleteCookies = async (req, res) => {
    let cookieOptions = {
        expires: new Date(Date.now() - 3600*1000),    // 1 hour = 3600 seconds and have to convert it to millisecond
        httpOnly: true,
        sameSite: true,
    }

    let cookieName = "Email";
    let data = "";

    res.cookie(cookieName, data, cookieOptions);

    res.json({status: "Ok"});
}