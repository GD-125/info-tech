"use client"

import { motion } from "framer-motion"
import { Code, BotIcon as Robot, Globe, Camera, Brain, Shield } from "lucide-react"

const clubs = [
  {
    id: 1,
    name: "Coding Club",
    icon: Code,
    description: "Enhance your programming skills and work on exciting projects.",
  },
  {
    id: 2,
    name: "Robotics Society",
    icon: Robot,
    description: "Design and build robots for competitions and research.",
  },
  {
    id: 3,
    name: "AI & Machine Learning Group",
    icon: Brain,
    description: "Explore the cutting-edge world of artificial intelligence and machine learning.",
  },
  {
    id: 4,
    name: "Cybersecurity Team",
    icon: Shield,
    description: "Learn about cybersecurity and participate in ethical hacking challenges.",
  },
  {
    id: 5,
    name: "Web Development Club",
    icon: Globe,
    description: "Create stunning websites and web applications using modern technologies.",
  },
  {
    id: 6,
    name: "Photography & Design Club",
    icon: Camera,
    description: "Capture moments and create beautiful designs for various department events.",
  },
]

export default function ClubsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 py-12">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl font-bold mb-8 text-center gradient-text"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Student Clubs
        </motion.h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {clubs.map((club, index) => (
            <motion.div
              key={club.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="p-6">
                <club.icon className="w-12 h-12 text-blue-500 mb-4" />
                <h2 className="text-2xl font-semibold mb-2">{club.name}</h2>
                <p className="text-gray-600 dark:text-gray-300">{club.description}</p>
              </div>
              <div className="bg-blue-500 p-4">
                <button className="w-full text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-colors">
                  Join Club
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

