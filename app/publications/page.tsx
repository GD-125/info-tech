"use client"

import { motion } from "framer-motion"
import { FileText, Users, Calendar, Award, ExternalLink } from "lucide-react"
import { useState } from "react"

const publications = [
  {
    title: "Advanced Machine Learning Algorithms for Big Data Analytics",
    authors: ["Dr. Jane Smith", "Dr. John Doe", "Dr. Emily Brown"],
    journal: "IEEE Transactions on Big Data",
    year: 2023,
    doi: "10.1109/TBDATA.2023.1234567",
    citations: 45,
    type: "journal",
  },
  {
    title: "Novel Approach to Quantum Computing Architecture",
    authors: ["Dr. Michael Johnson", "Dr. Sarah Wilson"],
    conference: "International Conference on Quantum Computing",
    year: 2023,
    doi: "10.1145/3456789.2023",
    citations: 32,
    type: "conference",
  },
  // Add more publications...
]

const categories = ["All", "Journal", "Conference"]

export default function PublicationsPage() {
  const [filter, setFilter] = useState("All")

  const filteredPublications = publications.filter((pub) => filter === "All" || pub.type === filter.toLowerCase())

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 py-12">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl font-bold mb-8 text-center gradient-text"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Research Publications
        </motion.h1>

        {/* Filter Buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`px-4 py-2 rounded-full ${
                filter === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category)}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Publications Grid */}
        <div className="grid gap-6">
          {filteredPublications.map((publication, index) => (
            <motion.div
              key={publication.title}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{publication.title}</h2>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
                      <Users className="w-4 h-4 mr-2" />
                      {publication.authors.join(", ")}
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
                      <FileText className="w-4 h-4 mr-2" />
                      {publication.journal || publication.conference}
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      {publication.year}
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <Award className="w-4 h-4 mr-2" />
                      {publication.citations} citations
                    </div>
                  </div>
                  <a
                    href={`https://doi.org/${publication.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="px-6 py-2 bg-gray-50 dark:bg-gray-700">
                <span className="text-xs font-medium text-gray-600 dark:text-gray-300">DOI: {publication.doi}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

