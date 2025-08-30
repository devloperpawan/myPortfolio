import React, { useEffect, useState } from "react";
import axios from "axios";
import FinanceProject from "../../assets/images/FinanceProject.png";
import FoodDelivery from "../../assets/images/FoodDelivery.png";
import "./Project.css";
import { useTheme } from "../../context/themeContext";

const Project = () => {
  const {theme} = useTheme();
  const [projects, setProjects] = useState([]); // start with empty array
  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await axios.get("https://portfoliopawanmern-backend.onrender.com/api/project");
      setProjects(res.data);
    } catch (err) {
      console.error("Fetching Error", err);
    }
  };

  return (
    <div className="md:w-[80%] w-full m-auto bg-transparent flex flex-col items-center justify-center pt-5 mt-5">
      <div className="about-intro w-full flex flex-col items-center justify-center">
        <h1 className={`text-4xl font-bold  ${theme === "light" ? "text-gray-900":"text-white"}`}>Projects</h1>
      </div>
      <hr className="mt-5 mb-2 text-gray-400 w-full" />

      <div className={`education ${theme === "light" ? "bg-white" : "bg-gray-800"} w-full md:pl-18 md:pr-10 mt-4 px-0 py-10 flex flex-wrap justify-center gap-6`}>
        {/* Card 1 */}
        {projects.map((project) => (
          <div
            key={project._id}
            className={`w-full sm:w-[400px] rounded overflow-hidden shadow-lg m-5 ${theme === "light" ? "" : "bg-gray-800"}`}
          >
            <img
              className="w-full h-48 object-cover"
              src={`https://portfoliopawanmern-backend.onrender.com/uploads/${project.image}`}
              alt={project.name}
            />
            <div className="px-6 py-4">
              <div className={`font-bold text-xl mb-2 ${theme === "light" ? "text-gray-900" : "text-gray-200"}`}>
                {project.name}
              </div>
              <p className={`${theme === "light" ? "text-gray-700" : "text-gray-400"} md:text-lg text-sm`}>
                {project.description}
              </p>
            </div>
          </div>
        ))}
        {/* <div className="w-full sm:w-[400px] rounded overflow-hidden shadow-lg m-5">
        <img
          className="w-full"
          src={FinanceProject}
          alt="Personal Finance Dashboard"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-gray-900">
            Personal Finance Dashboard
          </div>
          <p className="text-gray-700 md:text-lg text-sm">
            A dashboard that tracks income, expenses, savings, and investments with charts, budget planning, and real-time insights.
          </p>
        </div>
      </div> */}

        {/* Card 2 */}
        {/* <div className="w-full sm:w-[400px] rounded overflow-hidden shadow-lg m-5">
        <img
          className="w-full"
          src={FoodDelivery}
          alt="Food Delivery Website"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-gray-900">
            Food Delivery Website
          </div>
          <p className="text-gray-700 md:text-lg text-sm">
            A responsive food delivery website built with React, featuring menu display, smooth navigation, and clean UI.
          </p>
        </div>
      </div> */}
      </div>
    </div>
  );
};

export default Project;
