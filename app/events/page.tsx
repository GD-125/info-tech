"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Calendar, Clock, MapPin, User, ChevronDown, ChevronUp } from "lucide-react"

const events = [
  {
    id: 1,
    title: "Annual Tech Symposium",
    date: "2023-09-15",
    time: "09:00 AM - 05:00 PM",
    location: "Main Auditorium",
    description: "Join us for a day of cutting-edge tech talks and networking opportunities.",
    fullDescription:
      "Join us for a day of cutting-edge tech talks and networking opportunities. The Annual Tech Symposium brings together industry leaders, researchers, and students to explore the latest trends in technology. This year's focus will be on AI, blockchain, and quantum computing. Don't miss this chance to learn from the best and connect with peers in the tech world.",
    resourcePerson: "Dr. Jane Smith, AI Researcher",
  },
  {
    id: 2,
    title: "Hackathon 2023",
    date: "2023-10-20",
    time: "10:00 AM - 10:00 PM",
    location: "IT Department Labs",
    description: "24-hour coding challenge to solve real-world problems.",
    fullDescription:
      '24-hour coding challenge to solve real-world problems. This year\'s Hackathon theme is "Tech for Social Good". Participants will work in teams to develop innovative solutions addressing issues in healthcare, education, and environmental sustainability. Prizes include internship opportunities at top tech companies and the chance to turn your project into a startup.',
    resourcePerson: "Prof. John Doe, Software Engineer",
  },
  {
    id: 3,
    title: "AI Workshop Series",
    date: "2023-11-05",
    time: "02:00 PM - 04:00 PM",
    location: "Virtual Event",
    description: "Learn about the latest advancements in Artificial Intelligence.",
    fullDescription:
      "Learn about the latest advancements in Artificial Intelligence in this comprehensive workshop series. Topics will include machine learning, neural networks, computer vision, and natural language processing. Each session will combine theoretical concepts with hands-on exercises, allowing participants to gain practical experience with AI tools and frameworks.",
    resourcePerson: "Dr. Emily Brown, Machine Learning Expert",
  },
]

export default function EventsPage() {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null)

  const toggleExpand = (id: number) => {
    setExpandedEvent(expandedEvent === id ? null : id)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900 dark:to-purple-900 py-12">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl font-bold mb-8 text-center gradient-text"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Upcoming Events
        </motion.h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
            >
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">{event.title}</h2>
                <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                  <Calendar className="w-5 h-5 mr-2 text-purple-500" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                  <Clock className="w-5 h-5 mr-2 text-purple-500" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                  <MapPin className="w-5 h-5 mr-2 text-purple-500" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                  <User className="w-5 h-5 mr-2 text-purple-500" />
                  <span>{event.resourcePerson}</span>
                </div>
                <AnimatePresence>
                  <motion.p
                    className="text-gray-700 dark:text-gray-300 mb-4"
                    initial={{ height: "auto" }}
                    animate={{ height: "auto" }}
                    exit={{ height: "auto" }}
                  >
                    {expandedEvent === event.id ? event.fullDescription : event.description}
                  </motion.p>
                </AnimatePresence>
                <motion.button
                  className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold py-2 px-4 rounded hover:from-indigo-600 hover:to-purple-600 transition-colors flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => toggleExpand(event.id)}
                >
                  {expandedEvent === event.id ? (
                    <>
                      Show Less
                      <ChevronUp className="ml-2 w-4 h-4" />
                    </>
                  ) : (
                    <>
                      Learn More
                      <ChevronDown className="ml-2 w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

