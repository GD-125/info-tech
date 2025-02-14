"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import type React from "react" // Added import for React

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log({ name, email, message })
    setSubmitted(true)
    // Reset form
    setName("")
    setEmail("")
    setMessage("")
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
          Contact Us
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                  rows={4}
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </motion.button>
            </form>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-4 p-4 bg-green-100 text-green-700 rounded"
              >
                Thank you for your message. We'll get back to you soon!
              </motion.div>
            )}
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-6 h-6 mr-2 text-blue-500" />
                <span>it@university.edu</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 mr-2 text-blue-500" />
                <span>(123) 456-7890</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 mr-2 text-blue-500" />
                <span>123 University Street, City, State 12345</span>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-2">Office Hours</h3>
              <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p>Saturday - Sunday: Closed</p>
            </div>
            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2176767606084!2d-73.98823492404045!3d40.74844097138946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1686774794050!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

