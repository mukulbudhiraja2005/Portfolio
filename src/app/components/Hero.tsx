"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    // <section className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      <section className="relative w-full min-h-[60vh] py-12 text-white overflow-hidden">

      {/* 🌌 BACKGROUND IMAGE (clear visible) */}
      {/* <div className="absolute inset-0 bg-[url('/imag.png')] bg-cover bg-center opacity-100"></div> */}

      {/* ⭐ VERY LIGHT DARK OVERLAY (only for readability) */}
      {/* <div className="absolute inset-0 bg-black/30"></div> */}

      {/* 🔥 TOP RING GLOW (main effect like image 1) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[150px] bg-purple-500 blur-[80px] opacity-90 rounded-full"></div>

      {/* 🔥 EXTRA SHARP LIGHT LINE */}
      {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[80px] bg-purple-300 blur-[30px] opacity-80 rounded-full"></div> */}

      {/* 🌠 CENTER LIGHT FADE */}
      {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-purple-600 blur-[120px] opacity-40 rounded-full"></div> */}

      {/* <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-10 md:px-20 h-screen"> */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 px-5">

        {/* 🔥 LEFT SIDE */}
        {/* <div className="relative flex justify-center items-center mb-10 md:mb-0"> */}
        <div className="relative flex justify-center items-center md:ml-10 mb-10 md:mb-0">

          {/* ORBIT CIRCLES */}
          <div className="absolute w-[320px] h-[320px] rounded-full border border-purple-400 opacity-50"></div>
          <div className="absolute w-[260px] h-[260px] rounded-full border border-purple-500 opacity-40"></div>

          {/* GLOW */}
          <div className="absolute w-72 h-72 bg-purple-600 blur-3xl opacity-30 rounded-full"></div>

          {/* IMAGE */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative w-56 h-56 rounded-full overflow-hidden border-4 border-purple-500 z-10"
          >
            <Image
              src="/image.png"
              alt="profile"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* FLOATING ICONS */}
          {/* <motion.div
            className="absolute top-0 left-10 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            JS
          </motion.div>

          <motion.div
            className="absolute bottom-0 left-5 bg-orange-500 px-3 py-1 rounded-full text-sm"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            HTML
          </motion.div>

          <motion.div
            className="absolute top-10 right-0 bg-blue-500 px-3 py-1 rounded-full text-sm"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            TS
          </motion.div> */}

        </div>

        {/*  RIGHT SIDE */}
        <div className="max-w-xl text-center md:text-left">

          <motion.p className="text-purple-400 mb-3">
            Full Stack Web Developer
          </motion.p>

          <motion.h1 className="text-4xl md:text-6xl font-bold mb-4">
            Mukul <span className="text-purple-500">Budhiraja</span>
          </motion.h1>

          <motion.p className="text-gray-300 mb-6">
            Building modern, responsive and user-friendly{" "}
            <span className="text-purple-400">web experiences</span>.
            <br /><br />
             Developer by profession, Freelancer by passion, and Poet by heart.
            I build clean, modern web apps and write words that connect with emotions.
          </motion.p>

          <div className="flex gap-4 justify-center md:justify-start">
            {/* <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:scale-105 transition">
              View My Work
            </button> */}
            <Link href="/shayri">
  <button className="px-6 py-3 border border-gray-500 rounded-lg hover:bg-gray-800 transition">
    View Shayari 
  </button>
</Link>

           <a
  href="RESUME FINAL.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-3 border border-gray-500 rounded-lg hover:bg-gray-800 transition inline-block"
>
  View CV
</a>
          </div>
        </div>
      </div>
    </section>
  );
}