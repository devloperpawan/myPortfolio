import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const Project = () => {
  const [projectName, setProjectName] = useState("");
  const [projectAbout, setProjectAbout] = useState("");
  const [image, setImage] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("adminToken");

  // ✅ Fetch all projects on mount
  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:5000/api/project");
      setProjects(res.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching projects", err);
      setLoading(false);
    }
  };

  // ✅ Add new project
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", projectName);
    formData.append("description", projectAbout);
    formData.append("image", image);

    try {
      const res = await axios.post("http://localhost:5000/api/project", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Project added successfully!");
      setProjectName("");
      setProjectAbout("");
      setImage(null);
      fetchProjects(); // refresh project list
    } catch (err) {
      console.error("Upload error:", err);
      alert(err.response?.data?.message || "Failed to add project");
    }
  };

  // ✅ Delete a project
  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this project?");
    if (!confirm) return;

    try {
      await axios.delete(`http://localhost:5000/api/project/${id}`);
      alert("Project deleted!");
      setProjects((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      console.error("Delete error:", err);
      alert("Failed to delete project");
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow mt-5">
        <h2 className="text-2xl font-bold mb-4 text-indigo-600">Add Project</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Project Name</label>
            <input
              type="text"
              className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Project About</label>
            <textarea
              className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={projectAbout}
              onChange={(e) => setProjectAbout(e.target.value)}
              rows="4"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Upload Image</label>
            <input
              type="file"
              className="w-full"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="max-w-4xl mx-auto mt-10 bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4 text-indigo-600">All Projects</h2>

        {loading ? (
          <p>Loading...</p>
        ) : projects.length === 0 ? (
          <p>No projects found.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <div key={project._id} className="border border-gray-200 p-4 rounded relative bg-gray-50">
                <img
                  src={`http://localhost:5000/uploads/${project.image}`}
                  alt={project.name}
                  className="w-full h-40 object-cover rounded mb-2"
                />
                <h3 className="font-bold text-lg">{project.name}</h3>
                <p className="text-sm mb-2">{project.description}</p>
                <button
                  onClick={() => handleDelete(project._id)}
                  className="absolute top-2 right-2 text-white text-sm bg-indigo-600 hover:bg-indigo-700 px-2 py-1 rounded-lg"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Project;
