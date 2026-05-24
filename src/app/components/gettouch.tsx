"use client";

import { motion } from "framer-motion";

export default function GetTouch() {
  return (
    <section className="py-24 px-6 md:px-20 text-white relative">

      {/* 🔥 TOP SOFT GLOW (same theme) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[150px] bg-purple-500 blur-[80px] opacity-40 rounded-full"></div>

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">
        Get In <span className="text-purple-400">Touch</span> 💌
      </h2>

      {/* Contact Info */}
      <div className="text-center mb-12 space-y-3">
        <p className="text-lg md:text-xl font-medium">
          📞 <span className="text-gray-300">9817366024</span>
        </p>
        <p className="text-lg md:text-xl font-medium">
          📧 <span className="text-gray-400">budhirajasmukul@gmail.com</span>
        </p>
      </div>

      {/* Form */}
      <motion.form
        className="max-w-2xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl space-y-6 shadow-xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >

        {/* Name */}
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-purple-400 transition"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-purple-400 transition"
        />

        {/* Work */}
        <textarea
          rows={4}
          placeholder="What work do you want me to do?"
          className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-purple-400 transition"
        />

        {/* Button */}
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:scale-105 transition font-semibold"
        >
          Send Message 
        </button>

      </motion.form>

    </section>
  );
}
