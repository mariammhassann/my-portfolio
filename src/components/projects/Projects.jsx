import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import image from '../../assets/tasky.png'
import image2 from '../../assets/hyrotrack.jpg'
import image3 from '../../assets/movifey.png'
import image4 from '../../assets/calendok.jpg'

export default function Projects() {
    const listProjects = [
        {id:1, image:image, title:'Tasky', description:' Developed a resource and time management platform to assign, track, and monitor'},
        {id:2, image:image2, title:' HydroTrack ', description:' Created a responsive app that tracks water intake and promotes healthy hydration habits.'},
        {id:3, image:image3, title:'Movifey ', description:' Developed a dynamic movie catalog site with search and responsive design features.'},
        {id:4, image:image4, title:' Calendok', description:' Smart calendar and task management platform with e-commerce support for selling physical planners'},
    ];

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
        appendDots: dots => (
            <div>
                <ul className="flex justify-center space-x-3 mt-6"> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div className="w-3 h-3 rounded-full bg-gray-500 transition-all duration-300 hover:bg-orange-400"></div>
        ),
    };

    return (
        <section
            data-aos="fade-up"
            data-aos-delay="400"
            id="projects"
            className="relative overflow-hidden flex flex-col text-white body-font"
        >
            <div className="container px-5 py-24 mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
                <Slider {...settings}>
                    {listProjects.map(project => (
                        <div key={project.id} className="p-4">
                            <div
                                className="group h-full border-2 border-orange-400 shadow-[0_0_15px_rgba(255,165,0,0.7)] border-opacity-60 rounded-2xl overflow-hidden 
                                            transition-all duration-500 transform hover:-translate-y-3 hover:shadow-[0_0_25px_rgba(255,165,0,0.9)]"
                            >
                                {/* Image hover zoom */}
                                <div className="overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-auto lg:h-52 md:h-40 sm:h-32 object-cover object-center 
                                                   transform transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>

                                {/* Text content */}
                                <div className="p-6">
                                    <h2
                                        className="tracking-widest text-xl title-font font-semibold text-gray-300 mb-2 
                                                   transition-colors duration-300 group-hover:text-orange-400 group-hover:drop-shadow-[0_0_10px_orange]"
                                    >
                                        {project.title}
                                    </h2>
                                    <p className="leading-relaxed text-gray-200">{project.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}
