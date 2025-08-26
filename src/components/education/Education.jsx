import React from "react";

const education = [
  {
    degree: "BSc in Computer Science",
    institution: "Misr International University",
    year: "2022 – Present",
    details: "Minor in Software Engineering. Focused on frontend development, software design, and modern web technologies."
  },
  {
    degree: "High School Diploma",
    institution: "Manaret El Eman Language School",
    year: "2022",
    details: "Graduated with strong background in mathematics and computer fundamentals."
  }
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden flex flex-col text-white body-font"
    >
      <div className="container px-5 py-24 mx-auto">
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="sm:text-4xl text-2xl font-bold title-font mb-16 text-center text-orange-400"
        >
          Education
        </h1>

        <div className="flex flex-col space-y-12 relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 top-0 w-1 h-full bg-gradient-to-b from-orange-400 to-yellow-500 rounded-full"></div>

          {education.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={200 + index * 200}
              className="relative pl-12"
            >
              {/* Timeline Dot */}
              <span className="absolute left-0 top-2 w-6 h-6 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full shadow-lg"></span>
              
              <div className="p-6 rounded-xl border border-orange-300/40 hover:shadow-lg transition-shadow duration-300 bg-transparent">
                <h2 className="text-2xl font-semibold text-white">{item.degree}</h2>
                <p className="text-sm text-gray-300 mt-1">
                  {item.institution} • {item.year}
                </p>
                {item.details && (
                  <p className="mt-3 text-gray-400 leading-relaxed">{item.details}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
