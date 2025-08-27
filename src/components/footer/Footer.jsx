import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
    const listNavbar = [
        { name: 'Skills', link: '#skills' },
        { name: 'Experience', link: '#experience' },
        { name: 'Projects', link: '#projects' },
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-gray-800 text-gray-200 py-8 relative">
            <div className="container mx-auto px-5 flex flex-col md:flex-row items-center justify-between">

                {/* Left side text */}
                <span className="text-sm sm:text-base mb-4 md:mb-0">
                    © 2025 Mariam. <a href="#home" className="hover:text-yellow-400 underline">Portfolio</a>
                </span>

                {/* Navigation links */}
                <ul className="flex flex-wrap items-center space-x-4 md:space-x-6 text-sm sm:text-base mb-4 md:mb-0">
                    {listNavbar.map((item, index) => (
                        <li key={index}>
                            <a 
                                href={item.link} 
                                className="hover:text-yellow-400 transition-colors duration-300"
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Social icons */}
                <div className="flex space-x-5 text-xl">
                    <a href="https://www.linkedin.com/in/mariam-ashraf-40309b247/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors duration-300">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/mariammhassann" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors duration-300">
                        <FaGithub />
                    </a>
                  
                </div>
            </div>

            {/* Back to top button */}
            <button 
                onClick={scrollToTop} 
                className="fixed bottom-8 right-8 bg-yellow-400 text-black p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-50"
                title="Back to top"
            >
                ↑
            </button>
        </footer>
    );
}
