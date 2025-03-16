"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const faculty = [
  { id: 1, name: "Dr. Jane Smith", title: "Professor of Computer Science", image: "/placeholder.svg" },
  { id: 2, name: "Dr. John Doe", title: "Associate Professor of Cybersecurity", image: "/placeholder.svg" },
  {
    id: 3,
    name: "Dr. Emily Brown",
    title: "Assistant Professor of Artificial Intelligence",
    image: "/placeholder.svg",
  },
  { id: 4, name: "Dr. Michael Johnson", title: "Professor of Software Engineering", image: "/placeholder.svg" },
]

export default function FacultyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center gradient-text"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Faculty
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {faculty.map((member, index) => (
          <motion.div
            key={member.id}
            className="bg-card text-card-foreground p-6 rounded-lg shadow-lg text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
          >
            <Image
              src={member.image || "/placeholder.svg"}
              alt={member.name}
              width={200}
              height={200}
              className="rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{member.name}</h2>
            <p className="text-muted-foreground">{member.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

