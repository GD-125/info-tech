"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <motion.footer
      className="bg-gradient-to-r from-gray-800 to-gray-900 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4 gradient-text">IT Department</h3>
            <p className="text-gray-300">Empowering the next generation of tech innovators</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/courses" className="text-gray-300 hover:text-primary transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/faculty" className="text-gray-300 hover:text-primary transition-colors">
                  Faculty
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-gray-300 hover:text-primary transition-colors">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-300 hover:text-primary transition-colors">
                  Student Resources
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Contact Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-primary" />
                P. A. College of Engineering and Technology (Autonomous), Pollachi - 642 002
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-primary" />
                +91 99445 06992
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-primary" />
                pacetit@gmail.com
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p className="mb-2">
            Designed and Developed by Dept of{" "}
            <span className="font-bold text-primary animate-pulse">INFORMATION TECHNOLOGY</span>
          </p>
          <p>&copy; {new Date().getFullYear()} IT Department. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  )
}

