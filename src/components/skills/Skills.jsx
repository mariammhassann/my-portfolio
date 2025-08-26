import React from "react";
import javascript from "../../assets/javascript.png";
import html from "../../assets/html.png";
import php from "../../assets/php.png";
import webdesign from "../../assets/web-design.png";
import laravel from "../../assets/laravel.png";
import reactLogo from "../../assets/react.png";

const skills = [
  { name: "JavaScript", img: javascript },
  { name: "HTML", img: html },
  { name: "PHP", img: php },
  { name: "Web Design", img: webdesign },
  { name: "Laravel", img: laravel },
  { name: "React", img: reactLogo },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden flex flex-col text-white body-font"
    >
      <div className="container flex flex-col md:flex-row px-5 py-24 mx-auto items-start md:items-center">

        {/* Left Section - Technical Skills Overview */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 border-b border-orange-400"
        >
          <h1
            data-aos="fade-right"
            data-aos-delay="500"
            className="sm:text-4xl text-3xl font-bold title-font mb-4 text-white"
          >
            Technical Skills
          </h1>
          <p
            data-aos="fade-right"
            data-aos-delay="600"
            className="leading-relaxed text-base sm:text-lg text-gray-300"
          >
            <span className="font-semibold text-orange-400">Languages:</span>{" "}
            Python, C, C++, C#, Java, JavaScript, PHP, SQL, HTML, CSS
            <br />
            <span className="font-semibold text-orange-400">
              Frameworks / Technologies:
            </span>{" "}
            Spring Boot, Node.js, Thymeleaf, MongoDB, MySQL
            <br />
            <span className="font-semibold text-orange-400">Tools:</span> VS
            Code, Git, GitHub, Jira, Figma, Laravel
          </p>
        </div>

        {/* Right Section - Icons Grid */}
        <div
          data-aos="fade-left"
          data-aos-delay="500"
          className="md:w-1/2 md:pl-12 w-full"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center md:text-left">
            Core Tools & Tech
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 justify-items-center">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center group hover:scale-110 transition-transform duration-300"
              >
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="rounded-full w-16 sm:w-20 h-16 sm:h-20 object-cover shadow-lg group-hover:shadow-orange-500/50 transition duration-300"
                />
                <p className="mt-3 text-sm sm:text-base font-medium text-center">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
