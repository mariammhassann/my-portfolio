/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Hero from './components/hero/Hero'
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';
import Language from './components/language/Language';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Education from './components/education/Education';
import { Toaster } from "react-hot-toast";



export default function App() {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
    });
  },[]);
  return (
   <main className='bg-[#0d182e]'>
    <Hero /> 
    <Education/>
    <Skills />
    <Experience />
    <Projects /> 
    <Language />
    <Contact />
    <Footer />
   <Toaster position="top-center" reverseOrder={false} />

   </main>
  )
}

