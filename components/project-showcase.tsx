"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    title: "Smart City IoT Platform",
    image: "/placeholder.svg",
    description:
      "An IoT platform for managing smart city infrastructure, including traffic management, waste management, and energy optimization.",
    link: "#",
  },
  {
    title: "AI-Powered Health Diagnosis",
    image: "/placeholder.svg",
    description:
      "Using machine learning and computer vision for early disease detection and personalized treatment recommendations.",
    link: "#",
  },
  {
    title: "Blockchain-based Supply Chain",
    image: "/placeholder.svg",
    description:
      "Improving transparency and efficiency in supply chains using blockchain technology for product traceability and authenticity verification.",
    link: "#",
  },
]

export default function ProjectShowcase() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      ref={ref}
      className="mb-16 py-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900 dark:to-purple-900"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden hover-lift"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <a href={project.link} className="text-primary hover:underline inline-flex items-center">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

