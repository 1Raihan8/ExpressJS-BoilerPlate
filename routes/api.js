import express from "express";
const router = express.Router();
import * as taskController from "../app/controllers/taskController.js"

import authMiddleware from "../app/middlewares/authMiddleware.js";

// Create
router.post("/createTask", taskController.createTask);

// Read
router.get("/readTask", taskController.readTask);

// Update
router.put("/updateTask", taskController.updateTask);

// Delete
router.delete("/deleteTask", taskController.deleteTask);

// File Upload
router.post("/fileUpload", taskController.fileUpload);

// Token Encode
router.get("/tokenEncode", taskController.tokenEncode);

// Token Decode
router.get("/tokenDecode", taskController.tokenDecode);

// Send Email
router.get("/email", taskController.email);

// Profile (middleware)
router.get("/profile", authMiddleware, taskController.profile)

// Create Cookies
router.get("/createCookies", taskController.createCookies);

// Delete Cookies
router.get("/deleteCookies", taskController.deleteCookies); 

export default router;