const Project = require("../models/Project");
const jwt = require("jsonwebtoken");

exports.addProject = async (req, res) => {
  try {
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    // ✅ Auth inside controller
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "No token provided" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== "admin") return res.status(403).json({ message: "Access denied" });

    // ✅ Destructure after confirming req.body exists
    const { name, description } = req.body;
    const image = req.file ? req.file.filename : "";

    if (!name || !description) {
      return res.status(400).json({ message: "Name and description are required." });
    }

    const newProject = new Project({ name, description, image });
    await newProject.save();

    res.status(201).json({ message: "Project added successfully", project: newProject });
  } catch (err) {
    console.error("Project Add Error:", err.message);
    res.status(500).json({ message: "Error adding project" });
  }
};

exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ message: "Error fetching projects" });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Project deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting project" });
  }
};