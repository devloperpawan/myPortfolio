import React from "react";
import { useTheme } from "../../context/ThemeContext";

const About = () => {
  const {theme} = useTheme();
  return (
    <div className="md:w-[80%] m-auto bg-transparent flex flex-col items-center justify-center pt-5 mt-5 w-80%">
      <div className="about-intro w-full flex flex-col items-center justify-center">
        <h1 className={`text-4xl font-bold ${theme === "light" ? "text-gray-900" : "text-gray-200"}`}>About</h1>
        <hr className="mt-5 mb-2 text-gray-400 w-full"/>
        <p className={`md:w-[80%] md:text-lg text-start mt-4 text-sm ${theme === "light" ? "text-gray-700" : "text-gray-200"} w-[100%] p-1`}>
          I’m always eager to explore new technologies, take on real-world
          challenges, and grow as a full-stack developer. My mission is to
          create impactful web applications that solve real problems and deliver
          great user experiences.
        </p>
      </div>

      <div className={`education ${theme === "light" ? "bg-white" : "bg-gray-800"}  w-[100%] md:pl-18 md:pr-10 mt-4 p-4`}>
        <div className="w-[100%] flex md:flex-row flex-col justify-between items-center mt-6">
          <div className="degree md:w-[30%] flex md:flex-col md:justify-center justify-between items-center flex-row w-[100%]">
            <h2 className={`md:text-xl text-lg font-bold ${theme === "light" ? "text-gray-800" : "text-gray-200"}`}>
              Chitkara University, Himachal Pradesh
            </h2>
            <p className="flex justify-between w-full items-center md:mt-7">
              <span className={`md:text-xl text-lg font-bold p-1 ${theme === "light" ? "text-gray-800" : "text-gray-200"}`}>BCA</span>{" "}
              <span className="p-1 md:text-lg bg-yellow-400 rounded text-white font-bold">
                Aug 2022 - Aug 2025
              </span>
            </p>
          </div>

          <div className="about-degree md:w-[50%] md:mt-0 w-[100%] mt-10">
            <h2 className={`text-xl font-bold md:text-start text-center ${theme === "light" ? "text-gray-800" : "text-gray-200"}`}>
              Bachelor in Computer Aplication
            </h2>
            <p className={`md:text-lg text-sm ${theme === "light" ? "text-gray-700" : "text-gray-400"} mt-4 text-pretty`}>
              I pursued my BCA from Chitkara University, Himachal Pradesh, where
              I strengthened my technical and leadership skills by actively
              participating in college events and completing various
              certifications in web development and emerging technologies. These
              experiences helped me grow both as a developer and a team player.
            </p>
          </div>
        </div>
        <hr className="mt-5 text-gray-300" />

        {/* Intermediate Degree */}
        <div className="w-[100%] flex md:flex-row flex-col justify-between items-center mt-6">
          <div className="degree md:w-[30%] flex md:flex-col md:justify-center justify-between items-center flex-row w-[100%]">
            <h2 className={`md:text-xl text-lg font-bold ${theme === "light" ? "text-gray-800" : "text-gray-200"}`}>
              Rajput Inter College, Chapra, Bihar
            </h2>
            <p className="flex justify-between w-full items-center md:mt-7">
              <span className={`md:text-xl text-lg font-bold p-1 ${theme === "light" ? "text-gray-800" : "text-gray-200"}`}>12th</span>{" "}
              <span className="p-1 md:text-lg bg-yellow-400 rounded text-white font-bold">
                Feb 2021 - Feb 2022
              </span>
            </p>
          </div>

          <div className="about-degree md:w-[50%] md:mt-0 w-[100%] mt-10">
            <h2 className={`text-xl font-bold md:text-start text-center ${theme === "light" ? "text-gray-900" : "text-gray-200"}`}>Intermediate (PCM)</h2>
            <p className={`md:text-lg text-sm ${theme === "light" ? "text-gray-800" : "text-gray-400"} mt-4 text-pretty`}>
              I pursued my Intermediate (12th) from Rajput Inter College,
              Chapra, Bihar, with a focus on Physics, Chemistry, and
              Mathematics. I’ve always had a strong interest in Mathematics,
              which helped me develop logical thinking and problem-solving
              skills—an advantage in my journey as a developer.
            </p>
          </div>
        </div>
        <hr className="mt-5 text-gray-300" />

        {/* Skills Section */}
        <div className="skills-section mt-10">
          <h1 className={`text-4xl font-bold text-center ${theme === "light" ? "text-gray-900" : "text-gray-200"}`}>Skills</h1>
          <hr className="text-gray-300 mt-2" />

          {/* Skills Define Section */}
          <div className="w-full flex">

          {/* Box1 Section */}
            <div className="box1 w-full p-6">
              <div className={`text-section flex w-full justify-between ${theme === "light" ? "text-gray-900" : "text-gray-200"}`}>
                <p>HTML</p>
                <p>80%</p>
              </div>
              <section className="w-full h-3 border border-gray-300 rounded-4xl">
                <section className="w-[80%] h-full bg-yellow-400 rounded-4xl"></section>
              </section>

              <div className={`text-section flex w-full justify-between mt-2 ${theme === "light" ? "text-gray-900" : "text-gray-200"}`}>
                <p>JavaScript</p>
                <p>80%</p>
              </div>
              <section className="w-full h-3 border border-gray-300 rounded-4xl">
                <section className="w-[80%] h-full bg-yellow-400 rounded-4xl"></section>
              </section>

              {/* Node JS Section */}
              <div className={`text-section flex w-full justify-between mt-2 ${theme === "light" ? "text-gray-900" : "text-gray-200"}`}>
                <p>Node.JS</p>
                <p>70%</p>
              </div>
              <section className="w-full h-3 border border-gray-300 rounded-4xl">
                <section className="w-[80%] h-full bg-yellow-400 rounded-4xl"></section>
              </section>

              {/* MongoDb Section */}
              <div className={`text-section flex w-full justify-between mt-2 ${theme === "light" ? "text-gray-900" : "text-gray-200"}`}>
                <p>MongoDb</p>
                <p>80%</p>
              </div>
              <section className="w-full h-3 border border-gray-300 rounded-4xl">
                <section className="w-[80%] h-full bg-yellow-400 rounded-4xl"></section>
              </section>

              {/* Python Section */}
              <div className={`text-section flex w-full justify-between mt-2 ${theme === "light" ? "text-gray-900" : "text-gray-200"}`}>
                <p>Python</p>
                <p>60%</p>
              </div>
              <section className="w-full h-3 border border-gray-300 rounded-4xl">
                <section className="w-[60%] h-full bg-yellow-400 rounded-4xl"></section>
              </section>
            </div>

            {/* Box2 Section */}
            <div className="box2 w-full p-6">

            {/* Css Section */}
              <div className={`text-section flex w-full justify-between ${theme === "light" ? "text-gray-900" : "text-gray-200"}`}>
                <p>CSS</p>
                <p>70%</p>
              </div>
              <section className="w-full h-3 border border-gray-300 rounded-4xl">
                <section className="w-[70%] h-full bg-yellow-400 rounded-4xl"></section>
              </section>

              {/* Javascript Section */}
              <div className={`text-section flex w-full justify-between mt-2 ${theme === "light" ? "text-gray-800" : "text-gray-200"}`}>
                <p>React</p>
                <p>80%</p>
              </div>
              <section className="w-full h-3 border border-gray-300 rounded-4xl">
                <section className="w-[80%] h-full bg-yellow-400 rounded-4xl"></section>
              </section>

              {/* Express Js */}
              <div className={`text-section flex w-full justify-between mt-2 ${theme === "light" ? "text-gray-800" : "text-gray-200"}`}>
                <p>Express.JS</p>
                <p>85%</p>
              </div>
              <section className="w-full h-3 border border-gray-300 rounded-4xl">
                <section className="w-[85%] h-full bg-yellow-400 rounded-4xl"></section>
              </section>

              {/* MySql Section */}
              <div className={`text-section flex w-full justify-between mt-2 ${theme === "light" ? "text-gray-800" : "text-gray-200"}`}>
                <p>MySQL</p>
                <p>80%</p>
              </div>
              <section className="w-full h-3 border border-gray-300 rounded-4xl">
                <section className="w-[80%] h-full bg-yellow-400 rounded-4xl"></section>
              </section>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
