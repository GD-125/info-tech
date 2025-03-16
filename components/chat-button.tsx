"use client"

import type React from "react"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function ChatButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hello! How can I help you today?", isUser: false },
  ])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return

    // Add user message
    setMessages((prev) => [...prev, { text: message, isUser: true }])

    // Simulate response after a short delay
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "Thanks for your message! Our team will get back to you soon.",
          isUser: false,
        },
      ])
    }, 1000)

    setMessage("")
  }

  return (
    <>
      <motion.button
        className="fixed bottom-6 right-6 bg-primary text-white p-4 rounded-full shadow-lg z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
      >
        <MessageCircle className="h-6 w-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-20 right-6 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl z-50 overflow-hidden"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
          >
            <div className="bg-primary text-white p-4 flex justify-between items-center">
              <h3 className="font-semibold">Chat with Us</h3>
              <button onClick={() => setIsOpen(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="h-80 overflow-y-auto p-4 flex flex-col gap-3">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg max-w-[80%] ${
                    msg.isUser ? "bg-primary text-white self-end" : "bg-gray-100 dark:bg-gray-700 self-start"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 dark:border-gray-700 flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              />
              <button type="submit" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90">
                Send
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

