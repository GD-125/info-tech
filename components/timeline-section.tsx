"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Award, Rocket, Star, Globe, GraduationCap } from "lucide-react"
import { useTheme } from "next-themes"

const events = [
  {
    year: 2023,
    title: "New AI Research Center Opened",
    description: "Cutting-edge facility for advanced AI research and development.",
    icon: Rocket,
    category: "Research",
  },
  {
    year: 2022,
    title: "Launched Online Master's Program",
    description: "Flexible, fully online master's degree in Computer Science.",
    icon: GraduationCap,
    category: "Education",
  },
  {
    year: 2021,
    title: "Established Industry Partnership Program",
    description: "Collaborations with top tech companies for internships and projects.",
    icon: Globe,
    category: "Partnership",
  },
  {
    year: 2020,
    title: "Hosted International Tech Conference",
    description: "Global tech conference with industry leaders.",
    icon: Star,
    category: "Event",
  },
  {
    year: 2019,
    title: "Research Excellence Award",
    description: "Recognized for outstanding contributions in Computer Science research.",
    icon: Award,
    category: "Achievement",
  },
]

export default function TimelineSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      <div
        className={`absolute inset-0 ${
          isDark
            ? "bg-gradient-to-br from-blue-900 to-purple-900 opacity-90"
            : "bg-gradient-to-br from-blue-50 to-purple-50"
        }`}
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className={`text-4xl font-bold mb-16 text-center ${isDark ? "text-white" : "text-gray-800"}`}
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Our Journey Through Time
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            className={`absolute left-1/2 transform -translate-x-1/2 w-1 ${isDark ? "bg-blue-400" : "bg-blue-600"}`}
            initial={{ height: 0 }}
            animate={inView ? { height: "100%" } : {}}
            transition={{ duration: 1 }}
          />

          {events.map((event, index) => (
            <motion.div
              key={event.year}
              className={`flex items-center justify-center mb-16 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Timeline card */}
              <div className="w-full md:w-5/12">
                <motion.div
                  className={`${
                    isDark ? "bg-white/10 backdrop-blur-lg border-blue-400/30" : "bg-white border-blue-200"
                  } p-6 rounded-xl shadow-xl border hover:shadow-2xl transition-all duration-300`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center mb-4">
                    <div className={`${isDark ? "bg-blue-500" : "bg-blue-600"} p-3 rounded-full mr-4`}>
                      <event.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className={`text-3xl font-bold ${isDark ? "text-white" : "text-gray-800"}`}>{event.year}</h3>
                  </div>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm mb-2 ${
                      isDark ? "bg-blue-500/20 text-blue-300" : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {event.category}
                  </span>
                  <h4 className={`text-xl font-semibold mb-2 ${isDark ? "text-blue-300" : "text-blue-700"}`}>
                    {event.title}
                  </h4>
                  <p className={isDark ? "text-gray-300" : "text-gray-600"}>{event.description}</p>
                </motion.div>
              </div>

              {/* Timeline node */}
              <div className="mx-4 md:mx-8 relative">
                <motion.div
                  className={`w-8 h-8 rounded-full border-4 ${
                    isDark
                      ? "bg-blue-500 border-white shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                      : "bg-blue-600 border-white shadow-lg"
                  }`}
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.2 }}
                  whileHover={{ scale: 1.2 }}
                />
              </div>

              {/* Empty space for alignment */}
              <div className="w-full md:w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

