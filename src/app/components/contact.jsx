// import React from "react";

// const ContactForm = () => {
//   return (
//     <section id="contact" className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center px-6 py-6">
//       {/* 🧾 Heading */}
//       <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Contact Me</h2>
//       <p className="text-center text-gray-300 max-w-xl mb-10">
//         If you would like to contact me, please fill out the form below and I will get back to you as soon as possible.
//       </p>

//       {/* 📩 Form */}
//       <form className="w-full max-w-md space-y-4">
//         {/* Name */}
//         <input
//           type="text"
//           placeholder="Your Name"
//           className="w-full px-6 py-3 bg-slate-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white"
//         />
        
//         {/* Email */}
//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full px-6 py-3 bg-slate-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white"
//         />

//         {/* Message */}
//         <textarea
//           placeholder="Message"
//           rows="5"
//           className="w-full px-6 py-3 bg-slate-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white resize-none"
//         ></textarea>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="contact-button bg-white text-center  text-black font-semibold px-6 py-2 rounded-md hover:bg-gray-200 transition"
//         >
//           Submit
//         </button>
//       </form>
//     </section>
//   );
// };

// export default ContactForm;

'use client';
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    const result = await res.json();
    if (res.ok) {
      setStatus('✅ Message sent!');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    } else {
      setStatus(result.error || '❌ Something went wrong.');
    }
  };

  return (
    <section className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center px-6 py-6">
      <h2 className="text-4xl font-bold text-center mb-4">Contact Me</h2>
      <p className="text-center text-gray-300 max-w-xl mb-10">
        If you would like to contact me, please fill out the form below and I will get back to you as soon as possible.
      </p>

      <form className="w-full max-w-md space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-6 py-3 bg-slate-700 text-white rounded-md focus:ring-2 focus:ring-white"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-6 py-3 bg-slate-700 text-white rounded-md focus:ring-2 focus:ring-white"
        />

        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-6 py-3 bg-slate-700 text-white rounded-md focus:ring-2 focus:ring-white resize-none"
        ></textarea>

        <button
          type="submit"
          className="contact-button bg-white text-black font-semibold px-6 py-2 mr-4 rounded-md hover:bg-gray-200 transition"
        >
          Submit
        </button>

        {status && <p className="text-center text-md text-gray-400">{status}</p>}
      </form>
    </section>
  );
};

export default Contact;
