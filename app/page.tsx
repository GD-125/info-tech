import { motion } from "framer-motion"
import Link from "next/link"
import {
  ArrowRight,
  Book,
  Users,
  FlaskRoundIcon as Flask,
  Calendar,
  Award,
  Lightbulb,
  Cpu,
  Globe,
  Lock,
} from "lucide-react"
import StatisticsSection from "@/components/statistics-section"
import TimelineSection from "@/components/timeline-section"
import ProjectShowcase from "@/components/project-showcase"
import HireStudentsSection from "@/components/hire-students-section"
import TechStackShowcase from "@/components/tech-stack-showcase"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-16">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 text-center gradient-text"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to the IT Department
        </motion.h1>
        <motion.p
          className="text-xl text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Empowering the next generation of tech innovators
        </motion.p>
        <motion.div
          className="flex justify-center flex-wrap gap-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link
            href="/courses"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
          >
            Explore Our Courses
          </Link>
          <a
            href="https://docs.google.com/forms/d/e/your-form-id/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-semibold hover:bg-secondary/90 transition-colors"
          >
            Apply Now
          </a>
          <Link
            href="/hire"
            className="bg-accent text-accent-foreground px-6 py-3 rounded-full font-semibold hover:bg-accent/90 transition-colors"
          >
            Hire Our Students
          </Link>
        </motion.div>
      </section>

      <StatisticsSection />

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Featured Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Artificial Intelligence",
              icon: Cpu,
              description: "Learn about machine learning, neural networks, and AI applications.",
            },
            { title: "Web Development", icon: Globe, description: "Master modern web technologies and frameworks." },
            {
              title: "Cybersecurity",
              icon: Lock,
              description: "Explore network security, cryptography, and ethical hacking.",
            },
          ].map((course, index) => (
            <motion.div
              key={course.title}
              className="bg-card text-card-foreground p-6 rounded-lg shadow-lg hover-lift"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
            >
              <course.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="mb-4">{course.description}</p>
              <Link href="/courses" className="text-primary hover:underline inline-flex items-center">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Why Choose Our IT Department?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Cutting-edge Curriculum",
              icon: Book,
              description: "Stay ahead with our constantly updated course content.",
            },
            {
              title: "Expert Faculty",
              icon: Users,
              description: "Learn from industry professionals and renowned researchers.",
            },
            {
              title: "Innovative Research",
              icon: Flask,
              description: "Engage in groundbreaking research projects and collaborations.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              className="flex flex-col items-center text-center hover-lift"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
            >
              <item.icon className="h-16 w-16 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <TimelineSection />

      <ProjectShowcase />

      <HireStudentsSection />

      <TechStackShowcase />

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Join Our Community</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-card text-card-foreground p-6 rounded-lg shadow-lg hover-lift"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-4">Upcoming Events</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Calendar className="mr-2 h-5 w-5 text-primary" /> Tech Talk: AI in Healthcare
              </li>
              <li className="flex items-center">
                <Calendar className="mr-2 h-5 w-5 text-primary" /> Hackathon 2023
              </li>
              <li className="flex items-center">
                <Calendar className="mr-2 h-5 w-5 text-primary" /> Career Fair
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="bg-card text-card-foreground p-6 rounded-lg shadow-lg hover-lift"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-4">Student Achievements</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Award className="mr-2 h-5 w-5 text-primary" /> 1st Place in National Coding Competition
              </li>
              <li className="flex items-center">
                <Award className="mr-2 h-5 w-5 text-primary" /> Best Paper Award at IEEE Conference
              </li>
              <li className="flex items-center">
                <Award className="mr-2 h-5 w-5 text-primary" /> Google Summer of Code Participants
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Ready to Start Your Journey?</h2>
        <div className="text-center">
          <a
            href="https://docs.google.com/forms/d/e/your-form-id/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary/90 transition-colors inline-flex items-center animate-pulse-slow"
          >
            Apply Now <Lightbulb className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  )
}

