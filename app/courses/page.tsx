"use client"

import { motion } from "framer-motion"
import { Book, FlaskRoundIcon as Flask, Code, Database, Cloud, Shield, Brain, Network } from "lucide-react"
import { Tab } from "@headlessui/react"

const semesters = [
  {
    semester: 1,
    theory: [
      { name: "Introduction to Programming", code: "CS101", credits: 3 },
      { name: "Digital Logic Design", code: "CS102", credits: 3 },
      { name: "Mathematics I", code: "MA101", credits: 3 },
      { name: "Physics", code: "PH101", credits: 3 },
      { name: "Communication Skills", code: "EN101", credits: 3 },
    ],
    labs: [
      { name: "Programming Lab", code: "CS101L", credits: 2 },
      { name: "Digital Logic Lab", code: "CS102L", credits: 2 },
    ],
  },
  {
    semester: 2,
    theory: [
      { name: "Data Structures", code: "CS201", credits: 3 },
      { name: "Computer Organization", code: "CS202", credits: 3 },
      { name: "Mathematics II", code: "MA201", credits: 3 },
      { name: "Discrete Mathematics", code: "CS203", credits: 3 },
      { name: "Professional Ethics", code: "HU201", credits: 3 },
    ],
    labs: [
      { name: "Data Structures Lab", code: "CS201L", credits: 2 },
      { name: "Computer Organization Lab", code: "CS202L", credits: 2 },
    ],
  },
  // Add more semesters similarly...
]

const icons = {
  Book,
  Flask,
  Code,
  Database,
  Cloud,
  Shield,
  Brain,
  Network,
}

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 py-12">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl font-bold mb-8 text-center gradient-text"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Curriculum
        </motion.h1>

        <Tab.Group>
          <Tab.List className="flex space-x-2 rounded-xl bg-blue-900/20 p-1 mb-8">
            {semesters.map((sem) => (
              <Tab
                key={sem.semester}
                className={({ selected }) =>
                  `w-full rounded-lg py-2.5 text-sm font-medium leading-5
                  ${
                    selected
                      ? "bg-white dark:bg-gray-800 shadow text-blue-700 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:bg-white/[0.12] hover:text-blue-600"
                  }`
                }
              >
                Semester {sem.semester}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            {semesters.map((semester, idx) => (
              <Tab.Panel key={semester.semester} className={`rounded-xl bg-white dark:bg-gray-800 p-6 shadow-lg`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold mb-6 gradient-text">Semester {semester.semester}</h2>

                  {/* Theory Courses */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Theory Courses</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {semester.theory.map((course, index) => (
                        <motion.div
                          key={course.code}
                          className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <Book className="w-6 h-6 text-blue-600 dark:text-blue-400 mb-2" />
                          <h4 className="font-semibold mb-1">{course.name}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{course.code}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-500">Credits: {course.credits}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Lab Courses */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-green-600 dark:text-green-400">
                      Laboratory Courses
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {semester.labs.map((lab, index) => (
                        <motion.div
                          key={lab.code}
                          className="bg-green-50 dark:bg-green-900/30 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <Flask className="w-6 h-6 text-green-600 dark:text-green-400 mb-2" />
                          <h4 className="font-semibold mb-1">{lab.name}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{lab.code}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-500">Credits: {lab.credits}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  )
}

