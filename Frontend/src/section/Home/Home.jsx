
import React, { useState, useEffect, useRef } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Person from "../../assets/images/PawanSi.png";
import "./Home.css";
import { useTheme } from "../../context/ThemeContext";

const Home = () => {
  const { theme, toogleTheme } = useTheme(); // ✅ Get theme toggle function
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className={`Home md:w-[80%] md:flex-row md:text-start md:justify-between md:pl-10 ${
        theme === "light" ? "bg-white" : "bg-gray-800"
      } flex items-center pt-5 mt-5 flex-col-reverse text-center pl-0 w-full p-2 m-auto`}
    >
      {/* Main Left Section */}
      <div className="w-[100%] flex flex-col items-center justify-center md:w-[50%] md:items-start">
        <span
          className={`md:text-6xl font-bold ${
            theme === "light" ? "text-gray-800" : "text-gray-200"
          } text-4xl`}
        >
          <h1>I'm Pawan Singh</h1>
        </span>
        <span className="animated-text main-span md:text-6xl font-bold text-gray-900 text-4xl">
          <span className="anim">
            <span className="text-yellow-400">Full-Stack</span>{" "}
            <span
              className={`${
                theme === "light" ? "text-gray-800" : "text-gray-200"
              }`}
            >
              Devloper
            </span>
          </span>
        </span>
        <p
          className={`paragraph ${
            theme === "light" ? "text-gray-500" : "text-gray-400"
          } md:text-lg text-sm mt-7`}
        >
          I’m a dedicated MERN stack developer skilled in building dynamic web
          applications using MongoDB, Express.js, React, and Node.js with a
          focus on performance and usability.
        </p>
        <button
          onClick={() => window.open("/resumePawan.pdf", "_blank")}
          className="rounded w-40 text-lg font-medium bg-yellow-400 p-3 mt-10 hover:bg-yellow-500 hover:scale-100 hover:shadow-lg transition-all duration-300 ease-in-out"
        >
          Resume →
        </button>
      </div>

      {/* Right Image */}
      <div className="img-section md:w-[35%] w-[100%] flex justify-center items-center">
        <img src={Person} alt="" />
      </div>

      {/* Hamburger Icon */}
      <div
        ref={hamburgerRef}
        className="hamburger sm:hidden fixed top-5 right-5 text-black text-3xl cursor-pointer z-50"
        onClick={toggleMenu}
      >
        <span className="text-end">{menuOpen ? "" : "☰"}</span>
      </div>

      {/* Slide Menu */}
      <div
        ref={menuRef}
        className={`cardNavbar fixed top-0 w-[200px] h-screen ${
          theme === "light" ? "bg-white" : "bg-gray-900"
        } shadow-md transition-all duration-300 ${
          menuOpen ? "right-0" : "right-[-250px]"
        } z-40`}
      >
        <ul className="flex flex-col items-start p-5 mt-10 gap-6">
          {[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Projects", id: "project" },
            { name: "Contact", id: "contact" },
          ].map((item) => (
            <li
              key={item.id}
              className={`text-lg ${
                theme === "light" ? "text-gray-800" : "text-gray-200"
              } font-medium border-b-2 border-transparent hover:border-yellow-400 transition-all duration-300 cursor-pointer`}
            >
              <a href={`#${item.id}`} onClick={() => setMenuOpen(false)}>
                {item.name}
              </a>
            </li>
          ))}

          {/* ✅ Dark Mode Toggle Button inside Hamburger */}
          <li>
            <button
              onClick={toogleTheme}
              className="mt-5 px-4 py-2 rounded bg-yellow-400 hover:bg-yellow-500 transition-all duration-300 font-medium"
            >
              {theme === "light" ? "🌙 Dark" : "☀️ Light"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
