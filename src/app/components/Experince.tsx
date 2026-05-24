"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const experiences = [
  {
    company: "Glazia Enterprises",
    role: "Full Stack Web Developer",
    duration: "Feb 2026 - Present",
    image: "/projects/glazia.png",
    description:
      "Working on full-stack web applications, handling both frontend and backend development, building scalable and responsive solutions.",
  },
  {
    company: "Mother Son Private Limited",
    role: "Full Stack Web Developer",
    duration: "June 2025 - Aug 2025",
    image: "/projects/motherson.png",
    description:
      "Worked on real-world projects, developed responsive web applications and gained hands-on experience in frontend and backend technologies.",
  },
  {
    company: "DCRUST ODC",
    role: "TECHNICAL LEAD",
    duration: "SEP 2025 -Present",
    image: "/projects/odc.png",
    description:
      "Technical Lead for C++ and Web Development at college.Lead and mentored students in core programming concepts and modern web technologies, helping them build projects and improve problem-solving skills.Actively contributed to organizing technical activities and guiding peers in development practices."
    },
];

export default function Experience() {
  return (
    <section className="py-24 px-6 md:px-20">

      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-16">
        My <span className="text-purple-400">Experience</span>
      </h2>

      <div className="relative max-w-4xl mx-auto">

        {/* Vertical Line */}
        <div className="absolute left-4 top-0 w-[2px] h-full bg-purple-500/30"></div>

        {/* Cards */}
        <div className="space-y-12">

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="relative pl-12"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >

              {/* Dot */}
              <div className="absolute left-[6px] top-2 w-4 h-4 bg-purple-500 rounded-full shadow-lg"></div>

              {/* Card */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:scale-105 transition">

                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={exp.image}
                    alt={exp.company}
                    width={50}
                    height={50}
                    className="rounded-lg object-cover"
                  />

                  <div>
                    <h3 className="text-xl font-semibold">
                      {exp.company}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {exp.role}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-purple-400 mb-2">
                  {exp.duration}
                </p>

                <p className="text-gray-300 text-sm">
                  {exp.description}
                </p>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}