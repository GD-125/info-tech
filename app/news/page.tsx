"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Calendar, User, ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from "lucide-react"

const newsItems = [
  {
    id: 1,
    title: "Department Secures Major Research Grant",
    date: "2023-06-15",
    author: "Admin",
    content: "Our IT department has been awarded a $2 million grant for advanced AI research...",
    fullContent:
      "Our IT department has been awarded a $2 million grant for advanced AI research. This grant will fund a three-year project aimed at developing novel machine learning algorithms for real-time data processing in IoT devices. The project will involve collaboration with industry partners and provide numerous opportunities for graduate students to engage in cutting-edge research.",
    category: "Research",
  },
  {
    id: 2,
    title: "New State-of-the-Art Computer Lab Opening",
    date: "2023-06-10",
    author: "Dr. Jane Smith",
    content: "We are excited to announce the opening of our new computer lab equipped with...",
    fullContent:
      "We are excited to announce the opening of our new state-of-the-art computer lab. The lab is equipped with the latest high-performance workstations, VR development kits, and a dedicated AI cluster. This facility will enhance our students' learning experience and support advanced research projects. The lab will be open 24/7 for students and faculty members.",
    category: "Facilities",
  },
  {
    id: 3,
    title: "Students Win National Coding Competition",
    date: "2023-06-05",
    author: "Prof. John Doe",
    content: "A team of our undergraduate students has won first place in the National Coding Challenge...",
    fullContent:
      "A team of our undergraduate students has won first place in the National Coding Challenge. The team, consisting of Alice Johnson, Bob Smith, and Carol Lee, impressed the judges with their innovative solution to a complex algorithmic problem. Their victory includes a $10,000 prize and internship opportunities at leading tech companies. This achievement highlights the quality of our program and the exceptional talent of our students.",
    category: "Achievement",
  },
  // Add more news items...
]

const categoryColors = {
  Research: "bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100",
  Facilities: "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100",
  Achievement: "bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100",
}

export default function NewsPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [expandedNews, setExpandedNews] = useState<number | null>(null)
  const itemsPerPage = 5
  const totalPages = Math.ceil(newsItems.length / itemsPerPage)

  const [displayedNews, setDisplayedNews] = useState([])

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    setDisplayedNews(newsItems.slice(startIndex, endIndex))
  }, [currentPage])

  const toggleExpand = (id: number) => {
    setExpandedNews(expandedNews === id ? null : id)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 py-12">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl font-bold mb-8 text-center gradient-text"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Latest News
        </motion.h1>

        <div className="space-y-8">
          {displayedNews.map((news, index) => (
            <motion.div
              key={news.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400">{news.title}</h2>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${categoryColors[news.category]}`}>
                    {news.category}
                  </span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                  <Calendar className="w-5 h-5 mr-2 text-purple-500" />
                  <span className="mr-4">{news.date}</span>
                  <User className="w-5 h-5 mr-2 text-purple-500" />
                  <span>{news.author}</span>
                </div>
                <AnimatePresence>
                  <motion.p
                    className="text-gray-700 dark:text-gray-300"
                    initial={{ height: "auto" }}
                    animate={{ height: "auto" }}
                    exit={{ height: "auto" }}
                  >
                    {expandedNews === news.id ? news.fullContent : news.content}
                  </motion.p>
                </AnimatePresence>
                <motion.button
                  className="mt-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold py-2 px-4 rounded hover:from-indigo-600 hover:to-purple-600 transition-colors flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => toggleExpand(news.id)}
                >
                  {expandedNews === news.id ? (
                    <>
                      Read Less
                      <ChevronUp className="ml-2 w-4 h-4" />
                    </>
                  ) : (
                    <>
                      Read More
                      <ChevronDown className="ml-2 w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex justify-center items-center space-x-4">
          <motion.button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-full bg-indigo-500 text-white disabled:opacity-50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          <span className="text-lg font-semibold">
            Page {currentPage} of {totalPages}
          </span>
          <motion.button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="p-2 rounded-full bg-indigo-500 text-white disabled:opacity-50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>
      </div>
    </div>
  )
}

