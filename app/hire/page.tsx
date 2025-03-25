"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Briefcase, Search, Filter, User, Mail, Phone, MessageCircle, Linkedin, MapPin, X } from "lucide-react"

const students = [
  { id: 1, name: "Alice Johnson", skills: ["React", "Node.js", "Python"], year: "4th Year" },
  { id: 2, name: "Bob Smith", skills: ["Java", "Spring Boot", "MySQL"], year: "3rd Year" },
  { id: 3, name: "Carol Lee", skills: ["Machine Learning", "TensorFlow", "Python"], year: "4th Year" },
  { id: 4, name: "David Brown", skills: ["Angular", "TypeScript", "MongoDB"], year: "3rd Year" },
]

const departmentContact = {
  email: "it.department@university.edu",
  phone: "+1 (555) 123-4567",
  whatsapp: "+1 (555) 987-6543",
  linkedin: "linkedin.com/company/university-it-department",
  address: "123 University Avenue, Tech City, ST 12345",
}

export default function HirePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterYear, setFilterYear] = useState("All")
  const [showContact, setShowContact] = useState(false)

  const filteredStudents = students.filter(
    (student) =>
      (student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase()))) &&
      (filterYear === "All" || student.year === filterYear),
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 py-12">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl font-bold mb-8 text-center gradient-text"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hire Our Talented Students
        </motion.h1>

        <div className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="relative w-full md:w-1/2">
            <input
              type="text"
              placeholder="Search by name or skill..."
              className="w-full p-2 pl-10 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="text-gray-400" />
            <select
              className="p-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
              value={filterYear}
              onChange={(e) => setFilterYear(e.target.value)}
            >
              <option value="All">All Years</option>
              <option value="4th Year">4th Year</option>
              <option value="3rd Year">3rd Year</option>
              <option value="2nd Year">2nd Year</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStudents.map((student) => (
            <motion.div
              key={student.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <User className="w-12 h-12 text-primary mr-4" />
                  <div>
                    <h2 className="text-xl font-semibold">{student.name}</h2>
                    <p className="text-gray-600 dark:text-gray-400">{student.year}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <h3 className="font-semibold mb-2">Skills:</h3>
                  <div className="flex flex-wrap gap-2">
                    {student.skills.map((skill) => (
                      <span key={skill} className="bg-primary/10 text-primary px-2 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center"
                  onClick={() => setShowContact(true)}
                >
                  <Briefcase className="mr-2" />
                  Contact for Hiring
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {showContact && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                onClick={() => setShowContact(false)}
              >
                <X className="w-6 h-6" />
              </button>
              <h2 className="text-2xl font-bold mb-4 text-center gradient-text">Contact Information</h2>
              <div className="space-y-4">
                <motion.div
                  className="flex items-center"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <Mail className="w-6 h-6 mr-4 text-primary" />
                  <a href={`mailto:${departmentContact.email}`} className="hover:underline">
                    {departmentContact.email}
                  </a>
                </motion.div>
                <motion.div
                  className="flex items-center"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <Phone className="w-6 h-6 mr-4 text-primary" />
                  <a href={`tel:${departmentContact.phone}`} className="hover:underline">
                    {departmentContact.phone}
                  </a>
                </motion.div>
                <motion.div
                  className="flex items-center"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <MessageCircle className="w-6 h-6 mr-4 text-primary" />
                  <a
                    href={`https://wa.me/${departmentContact.whatsapp.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    WhatsApp
                  </a>
                </motion.div>
                <motion.div
                  className="flex items-center"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <Linkedin className="w-6 h-6 mr-4 text-primary" />
                  <a
                    href={`https://${departmentContact.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    LinkedIn Profile
                  </a>
                </motion.div>
                <motion.div
                  className="flex items-start"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <MapPin className="w-6 h-6 mr-4 text-primary flex-shrink-0" />
                  <span>{departmentContact.address}</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

