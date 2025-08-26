import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      'service_51mzsmi',    //  EmailJS service ID
      'template_s7fs2ci',   //  EmailJS template ID
      e.target,
      'UYJivWvasAF-EQTUj'   //  EmailJS public key
    )
    .then(() => {
        toast.success(' Message sent successfully!');
        e.target.reset();
    })
    .catch((error) => {
        console.log(error.text);
        toast.error('❌ Failed to send. Please try again.');
    })
    .finally(() => setLoading(false));
  };

  return (
    <section id='contact' data-aos='fade-up' data-aos-delay='400'>
      <div className='py-12 lg:py-20 mx-auto max-w-screen-md'>
        {/* Title */}
        <h2 className='mb-6 text-4xl md:text-5xl tracking-tight font-extrabold text-center text-white drop-shadow-lg'>
          Contact <span className='text-orange-400'>Me</span>
        </h2>
        <p className='text-center mb-10 text-gray-300 text-lg'>
          I’d love to hear from you! Whether it’s a project, collaboration, or just to say hi 👋
        </p>

        {/* Contact Form */}
        <form 
          onSubmit={handleSubmit} 
          className='space-y-8 bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20 transition-transform duration-300 hover:scale-[1.01]'
        >
          {/* Email Field */}
          <div>
            <label htmlFor='email' className='block mb-2 text-lg font-medium text-white'>
              Email
            </label>
            <input 
              type='email' 
              id='email' 
              name='user_email'
              className='w-full p-3 rounded-lg text-gray-900 font-semibold shadow-sm bg-gray-200 focus:ring-4 focus:ring-orange-400 focus:outline-none transition duration-300'
              placeholder='name@example.com' 
              required
            />
          </div>

          {/* Message Field */}
          <div className='sm:col-span-2'>
            <label htmlFor='message' className='block mb-2 text-lg font-medium text-white'>
              Message
            </label>
            <textarea 
              rows="6"
              id='message' 
              name='message'
              className='w-full p-3 rounded-lg text-gray-900 font-semibold shadow-sm bg-gray-200 focus:ring-4 focus:ring-orange-400 focus:outline-none transition duration-300'
              placeholder='Leave your message here...' 
              required
            />
          </div>

          {/* Submit Button */}
          <div className='flex justify-center'>
            <button 
              type='submit'
              disabled={loading}
              className={`relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-semibold text-white transition-all duration-300 ease-in-out rounded-full 
              ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-orange-500 to-yellow-400 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,165,0,0.8)]'}`}
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                  </svg>
                  Sending...
                </div>
              ) : "Send Message "}
            </button>
          </div>
        </form>
      </div>

      {/* Toast notifications */}
      <Toaster position="bottom-right" reverseOrder={false} />
    </section>
  );
}
