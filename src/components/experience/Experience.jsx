import React from 'react'
import img_experience from '../../assets/EBE-E.png'

const experiences = [
  {
    year: "2025",
    title: "Summer Training — Front-End Developer Intern",
    place: "Egyptian Bureau for Engineering (EBE)",
    description:
      "Contributed to building and improving user interfaces. Focused on responsive design, accessibility, and modern frontend workflows.",
  },

]

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden flex flex-col text-gray-600 body-font"
    >
      {/* Background effect */}
      <div className="absolute top-[100px] left-64 inset-x-0 flex items-start justify-center">
        <div className="h-96 w-96 bg-gradient-to-br from-[#ff910a] blur-2xl invisible opacity-40 rounded-full"></div>
        <div className="h-96 w-96 bg-gradient-to-r from-[#ffdb12] opacity-40 blur-2xl rounded-full"></div>
      </div>

      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        {/* Left Side Image */}
        <div
          data-aos="fade-right"
          data-aos-delay="400"
          className="relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0"
        >
          <div className="md:h-[450px] h-[400px] md:w-[300px] w-[300px] md:right-36 
                          bg-gradient-to-r from-orange-600 via-yellow-500 to-red-400 
                          absolute rounded-md transform rotate-3 -top-8 
                          shadow-[0_0_40px_rgba(225,165,0,0.7)] z-0"></div>
          <img
            src={img_experience}
            className="object-cover md:w-[300px] md:h-[450px] object-center 
                       rounded relative z-10"
            alt="Experience"
          />
        </div>

        {/* Right Side Experience Content */}
        <div
          data-aos="fade-left"
          data-aos-delay="400"
          className="lg:flex-grow md:w-1/2 lg:pl-8 md:pl-8 
                     flex flex-col md:items-start md:text-left 
                     items-center text-center "
        >
          <h1 className="title-font sm:text-4xl text-3xl mb-8 font-bold text-orange-500">
            Experience
          </h1>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="mb-8 p-6 border border-orange-400 rounded-lg 
                         shadow-lg bg-black/30 hover:bg-black/40 
                         transition duration-300"
            >
              <h2 className="title-font font-bold text-white sm:text-2xl">
                {exp.year} — {exp.title}
              </h2>
              <p className="text-sm text-yellow-400 font-semibold">{exp.place}</p>
              <p className="mt-3 text-gray-200 leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
