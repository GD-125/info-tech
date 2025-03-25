"use client"

import { motion } from "framer-motion"
import { Book, Calendar, Users, LinkIcon } from "lucide-react"

const resources = [
  {
    title: "Online Library",
    icon: Book,
    description: "Access our extensive collection of digital books and journals.",
  },
  { title: "Academic Calendar", icon: Calendar, description: "Stay up-to-date with important dates and deadlines." },
  { title: "Student Organizations", icon: Users, description: "Join clubs and groups related to your interests." },
  {
    title: "Career Services",
    icon: LinkIcon,
    description: "Get help with job searches, resume writing, and interview preparation.",
  },
]

export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center gradient-text"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Student Resources
      </motion.h1>
      <p className="text-center text-lg mb-12">Everything you need to succeed in your academic journey</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {resources.map((resource, index) => (
          <motion.div
            key={resource.title}
            className="bg-card text-card-foreground p-6 rounded-lg shadow-lg hover-lift"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <resource.icon className="w-12 h-12 text-primary mb-4" />
            <h2 className="text-2xl font-semibold mb-2">{resource.title}</h2>
            <p>{resource.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

