"use client"

import { motion } from "framer-motion"
import { Briefcase, Users, Star, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function HireStudentsSection() {
  return (
    <section className="mb-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900 py-12 rounded-xl">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center gradient-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hire Our Talented Students
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Briefcase, title: "Internships", description: "Offer valuable work experience" },
            { icon: Users, title: "Full-time Positions", description: "Recruit our top graduates" },
            { icon: Star, title: "Project Collaborations", description: "Partner on innovative projects" },
            { icon: CheckCircle, title: "Skill-Matched Hiring", description: "Find the perfect fit for your team" },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <item.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link
            href="/hire"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors inline-flex items-center"
          >
            Connect with Our Students <Briefcase className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

