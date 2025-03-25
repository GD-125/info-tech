"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const researchAreas = [
  {
    title: "Artificial Intelligence",
    image: "/placeholder.svg",
    description: "Exploring machine learning, natural language processing, and computer vision.",
  },
  {
    title: "Cybersecurity",
    image: "/placeholder.svg",
    description: "Developing advanced techniques for network security and cryptography.",
  },
  {
    title: "Internet of Things",
    image: "/placeholder.svg",
    description: "Creating smart, connected devices and systems for various applications.",
  },
  {
    title: "Quantum Computing",
    image: "/placeholder.svg",
    description: "Investigating the potential of quantum algorithms and quantum information theory.",
  },
]

export default function ResearchPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center gradient-text"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Research
      </motion.h1>
      <p className="text-center text-lg mb-12">Pushing the boundaries of technology through innovative research</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {researchAreas.map((area, index) => (
          <motion.div
            key={area.title}
            className="bg-card text-card-foreground p-6 rounded-lg shadow-lg hover-lift"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Image
              src={area.image || "/placeholder.svg"}
              alt={area.title}
              width={400}
              height={200}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">{area.title}</h2>
            <p>{area.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

