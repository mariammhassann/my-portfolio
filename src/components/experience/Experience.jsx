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
      <div className="absolute top-[100px] left-0 right-0 flex items-start justify-center">
        <div className="h-64 w-64 md:h-80 md:w-80 lg:h-96 lg:w-96 
                        bg-gradient-to-br from-[#ff910a] blur-2xl opacity-30 
                        rounded-full"></div>
        <div className="h-64 w-64 md:h-80 md:w-80 lg:h-96 lg:w-96 
                        bg-gradient-to-r from-[#ffdb12] opacity-30 blur-2xl 
                        rounded-full"></div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        
        {/* Left Side Image */}
        <div
          data-aos="fade-right"
          data-aos-delay="400"
          className="relative w-full sm:w-3/4 md:w-1/2 flex justify-center mb-10 md:mb-0"
        >
          <div className="absolute md:h-[450px] h-[280px] md:w-[300px] w-[220px] 
                          bg-gradient-to-r from-orange-600 via-yellow-500 to-red-400 
                          rounded-md transform rotate-3 -top-4 shadow-[0_0_40px_rgba(225,165,0,0.7)] z-0">
          </div>
          <img
            src={img_experience}
            className="object-cover w-[220px] h-[280px] sm:w-[260px] sm:h-[350px] 
                       md:w-[300px] md:h-[450px] rounded relative z-10"
            alt="Experience"
          />
        </div>

        {/* Right Side Experience Content */}
        <div
          data-aos="fade-left"
          data-aos-delay="400"
          className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left 
                     items-center text-center px-2 sm:px-6"
        >
          <h1 className="title-font text-2xl sm:text-3xl md:text-4xl mb-6 font-bold text-orange-500">
            Experience
          </h1>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="mb-6 sm:mb-8 p-4 sm:p-6 border border-orange-400 rounded-lg 
                         shadow-lg bg-black/30 hover:bg-black/40 transition duration-300 w-full"
            >
              <h2 className="title-font font-bold text-lg sm:text-xl md:text-2xl text-white">
                {exp.year} — {exp.title}
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-yellow-400 font-semibold">
                {exp.place}
              </p>
              <p className="mt-3 text-gray-200 text-sm sm:text-base leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
