"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const techStack = [
  { name: "React", logo: "/react-logo.svg" },
  { name: "Node.js", logo: "/nodejs-logo.svg" },
  { name: "Python", logo: "/python-logo.svg" },
  { name: "TensorFlow", logo: "/tensorflow-logo.svg" },
  { name: "AWS", logo: "/aws-logo.svg" },
  { name: "Docker", logo: "/docker-logo.svg" },
]

export default function TechStackShowcase() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Our Tech Stack</h2>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="text-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Image
              src={tech.logo || "/placeholder.svg"}
              alt={`${tech.name} logo`}
              width={80}
              height={80}
              className="mx-auto mb-2"
            />
            <p className="text-sm font-semibold">{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

