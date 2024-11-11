import express from "express";
const router = express.Router();
import * as taskController from "../app/controllers/taskController.js"

// Create
router.post("/createTask", taskController.createTask);

// Read
router.get("/readTask", taskController.readTask);

// Update
router.put("/updateTask", taskController.updateTask);

// Delete
router.delete("/deleteTask", taskController.deleteTask);

// File Upload
// router.post("demo1", taskController.demo1);

export default router;