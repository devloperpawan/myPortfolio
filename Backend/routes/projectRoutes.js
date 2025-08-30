const express = require("express");
const multer = require("multer");
const { addProject, getProjects, deleteProject } = require("../controllers/projectController");

const router = express.Router();

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// ✅ DO NOT use verifyAdmin here, auth will be checked inside controller
router.post("/project", upload.single("image"), addProject);
router.get("/project", getProjects);
router.delete("/project/:id", deleteProject);

module.exports = router;
