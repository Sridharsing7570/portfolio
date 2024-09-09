// Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="p-10 bg-white text-center">
      <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
      <form className="max-w-md mx-auto">
        <input
          type="email"
          placeholder="Your Email"
          className="w-full mb-4 p-3 border border-gray-300 rounded"
        />
        <textarea
          placeholder="Your Message"
          className="w-full mb-4 p-3 border border-gray-300 rounded"
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
