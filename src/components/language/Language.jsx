import React from 'react';

export default function Language() {
  const languages = [
    { code: 'En', name: 'English', level: 'Excellent' },
    { code: 'Ar', name: 'Arabic', level: 'Native' },
    { code: 'Gr', name: 'German', level: 'Average' },
  ];

  return (
    <section
      id="languages"
      data-aos="fade-up"
      data-aos-delay="200"
      className="py-20 text-center text-white"
    >
      <h1 className="sm:text-4xl text-2xl font-bold title-font mb-16">
        Languages
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 justify-items-center">
        {languages.map((language, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay={200 + index * 200}
            className="flex flex-col items-center group"
          >
            {/* Glowing Circle */}
            <div className="relative w-24 h-24 md:w-28 md:h-28 flex items-center justify-center rounded-full bg-white text-blue-950 text-2xl font-bold shadow-xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
              <span className="z-10">{language.code}</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#ff9743] to-[#ffe460] animate-pulse opacity-80 -z-10"></div>
            </div>

            {/* Text */}
            <span className="mt-6 text-xl font-semibold group-hover:text-[#ffe460] transition-colors duration-300">
              {language.name}
            </span>
            <span className="text-[#ffa600] text-lg font-bold group-hover:scale-110 transition-transform duration-300">
              {language.level}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
