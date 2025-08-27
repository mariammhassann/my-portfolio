import React, { useState, useEffect } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const listNavbar = [
        { name: 'Education', link: '#education' },
        { name: 'Skills', link: '#skills' },
        { name: 'Experience', link: '#experience' },
        { name: 'Projects', link: '#projects' },
    ];

    // Update active section on scroll
    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY + 200;
            listNavbar.forEach(item => {
                const section = document.querySelector(item.link);
                if (section) {
                    const top = section.offsetTop;
                    const bottom = top + section.offsetHeight;
                    if (scrollPos >= top && scrollPos < bottom) {
                        setActiveSection(item.link.substring(1));
                    }
                }
            });
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Smooth scroll
    const handleClick = (e, link) => {
        e.preventDefault();
        const section = document.querySelector(link);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    return (
        <header className="fixed w-full z-50 backdrop-blur-md bg-black/30 shadow-md">
            <div className="container mx-auto flex items-center justify-between p-5">
                
                {/* Mobile Hamburger (left) */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Logo (center on mobile, left on desktop) */}
                <a className="flex title-font font-bold text-white text-2xl md:text-3xl tracking-wide mx-auto md:mx-0">
                    Portfolio
                </a>

                {/* Desktop Links (center) */}
                <nav className="hidden md:flex space-x-6 text-lg font-medium mx-auto">
                    {listNavbar.map((item, index) => (
                        <a
                            key={index}
                            href={item.link}
                            onClick={(e) => handleClick(e, item.link)}
                            className={`relative group transition-colors duration-300 
                                ${activeSection === item.link.substring(1) ? 'text-yellow-400 font-bold' : 'text-white'}
                            `}
                        >
                            {item.name}
                            <span className="absolute left-0 -bottom-1 w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </nav>

                {/* Contact Button (right, only desktop) */}
                <div className="hidden md:block">
                    <a
                        href="#contact"
                        onClick={(e) => handleClick(e, '#contact')}
                        className="inline-flex items-center py-2 px-6 rounded-full font-semibold text-white border border-white transition-all duration-300 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 shadow-md"
                    >
                        Contact Me
                    </a>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-black/80 backdrop-blur-md text-center py-6 flex flex-col space-y-4">
                    {listNavbar.map((item, index) => (
                        <a
                            key={index}
                            href={item.link}
                            onClick={(e) => handleClick(e, item.link)}
                            className={`text-lg font-medium transition-colors duration-300
                                ${activeSection === item.link.substring(1) ? 'text-yellow-400 font-bold' : 'text-white'}
                            `}
                        >
                            {item.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={(e) => handleClick(e, '#contact')}
                        className="inline-block py-2 px-6 rounded-full font-semibold text-white border border-white transition-all duration-300 hover:bg-yellow-400 hover:text-black hover:border-yellow-400"
                    >
                        Contact Me
                    </a>
                </div>
            )}
        </header>
    );
}
