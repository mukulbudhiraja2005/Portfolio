"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Wanderlust",
    description: "A full-stack travel platform where users can explore, add and manage destinations with authentication and dynamic data handling.",
    image: "/projects/wanderlust.png",
    live: "https://github.com/mukulbudhiraja2005",
    github: "https://github.com/mukulbudhiraja2005",
  },
  {
    title: "Career AI",
    description: "An AI-powered career assistant that helps users with guidance, suggestions and smart insights based on their goals.",
    image: "/projects/careerai.png",
    live: "https://github.com/mukulbudhiraja2005",
    github: "https://github.com/mukulbudhiraja2005",
  },
  {
    title: "Password Manager",
    description: "A secure password manager to store and manage user credentials with encryption and authentication features.",
    image: "/projects/password.png",
     live: "https://github.com/mukulbudhiraja2005",
    github: "https://github.com/mukulbudhiraja2005",
  },
  {
    title: "Simon Says Game",
    description: "A fun memory-based game built with JavaScript that challenges users to repeat sequences correctly.",
    image: "/projects/simon.png",
     live: "https://github.com/mukulbudhiraja2005",
    github: "https://github.com/mukulbudhiraja2005",
  },
  {
    title: "Spotify Clone",
    description: "A responsive music player UI inspired by Spotify built using HTML, CSS and JavaScript.",
    image: "/projects/spotify.png",
    live: "https://github.com/mukulbudhiraja2005",
    github: "https://github.com/mukulbudhiraja2005",
  },
  {
    title: "Weather App",
    description: "A real-time weather application that fetches data using API and displays temperature, humidity and conditions.",
    image: "/projects/weather.png",
    live: "https://github.com/mukulbudhiraja2005",
    github: "https://github.com/mukulbudhiraja2005",
  },
];

export default function Projects() {
  return (
    <section className="py-24 px-6 md:px-20 text-center">

      {/* Heading */}
      <h2 className="text-4xl font-bold mb-16">
        My <span className="text-purple-400">Projects</span>
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:scale-105 transition duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >

            {/* Image */}
            <div className="overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover group-hover:scale-110 transition duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-5 text-left">

              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                {project.description}
              </p>

              {/* Buttons */}
              <div className="flex gap-3">

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:scale-105 transition"
                >
                  Live
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm border border-gray-500 rounded-lg hover:bg-gray-800 transition"
                >
                  Code
                </a>

              </div>

            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}