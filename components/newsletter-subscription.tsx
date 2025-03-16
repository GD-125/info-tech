"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"
import { motion } from "framer-motion"

export default function NewsletterSubscription() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus("loading")

    // Simulate API call
    setTimeout(() => {
      if (email.includes("@") && email.includes(".")) {
        setStatus("success")
        setMessage("Thank you for subscribing to our newsletter!")
        setEmail("")
      } else {
        setStatus("error")
        setMessage("Please enter a valid email address.")
      }
    }, 1500)
  }

  return (
    <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 p-8 rounded-xl shadow-lg">
      <h3 className="text-2xl font-bold mb-4 text-center">Subscribe to Our Newsletter</h3>
      <p className="text-center mb-6">Stay updated with the latest news, events, and opportunities.</p>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 p-3 rounded-lg border focus:ring-2 focus:ring-primary focus:border-primary dark:bg-gray-800 dark:border-gray-700"
            disabled={status === "loading"}
          />
          <motion.button
            type="submit"
            className="bg-primary text-white px-4 py-3 rounded-lg flex items-center gap-2 hover:bg-primary/90 disabled:opacity-50"
            disabled={status === "loading"}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {status === "loading" ? "Subscribing..." : "Subscribe"}
            <Send className="h-4 w-4" />
          </motion.button>
        </div>

        {status === "success" && (
          <motion.p
            className="mt-2 text-green-600 dark:text-green-400 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {message}
          </motion.p>
        )}

        {status === "error" && (
          <motion.p
            className="mt-2 text-red-600 dark:text-red-400 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {message}
          </motion.p>
        )}
      </form>
    </div>
  )
}

