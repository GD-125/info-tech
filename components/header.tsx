"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun, Menu, X, ChevronDown, Search, Bell } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import type React from "react"

const navItems = [
  { name: "Home", href: "/" },
  {
    name: "Academics",
    href: "#",
    submenu: [
      { name: "Courses", href: "/courses" },
      { name: "Faculty", href: "/faculty" },
      { name: "Research", href: "/research" },
      { name: "Publications", href: "/publications" },
    ],
  },
  {
    name: "Student Life",
    href: "#",
    submenu: [
      { name: "Resources", href: "/resources" },
      { name: "Events", href: "/events" },
      { name: "Clubs", href: "/clubs" },
    ],
  },
  { name: "News", href: "/news" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [notifications, setNotifications] = useState([])
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleSubmenu = (name: string) => {
    setActiveSubmenu(activeSubmenu === name ? null : name)
  }

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const searchTerm = (e.target as HTMLFormElement).search.value
    // Implement search functionality here
    console.log("Searching for:", searchTerm)
    setSearchOpen(false)
  }

  const checkNotifications = () => {
    // Simulating fetching notifications
    setTimeout(() => {
      setNotifications([
        { id: 1, message: "New announcement: Summer internship opportunities" },
        { id: 2, message: "Reminder: Course registration deadline approaching" },
      ])
    }, 1000)
  }

  return (
    <motion.header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg" : "bg-white dark:bg-gray-900"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              className="text-2xl font-bold text-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              IT Department
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <button
                    onClick={() => toggleSubmenu(item.name)}
                    className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors ${
                      pathname === item.href ? "font-bold" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                )}

                {item.submenu && (
                  <AnimatePresence>
                    {activeSubmenu === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5"
                      >
                        <div className="py-1">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                              onClick={() => setActiveSubmenu(null)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
            </motion.button>

            <motion.button
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={checkNotifications}
            >
              <Bell className="h-5 w-5" />
              {notifications.length > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                  {notifications.length}
                </span>
              )}
            </motion.button>

            {mounted && (
              <motion.button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </motion.button>
            )}
          </div>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4"
            >
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <button
                      onClick={() => toggleSubmenu(item.name)}
                      className="w-full flex items-center justify-between py-2 text-gray-600 dark:text-gray-300"
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          activeSubmenu === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="block py-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}

                  {item.submenu && activeSubmenu === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="pl-4 space-y-2"
                    >
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block py-2 text-sm text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}

              <div className="mt-4 flex items-center space-x-4 border-t pt-4">
                <motion.button
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSearchOpen(true)}
                >
                  <Search className="h-5 w-5" />
                </motion.button>

                <motion.button
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={checkNotifications}
                >
                  <Bell className="h-5 w-5" />
                  {notifications.length > 0 && (
                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                      {notifications.length}
                    </span>
                  )}
                </motion.button>

                {mounted && (
                  <motion.button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  </motion.button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Search Modal */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md"
              >
                <form onSubmit={handleSearch} className="flex flex-col space-y-4">
                  <input
                    type="text"
                    name="search"
                    placeholder="Search..."
                    className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                    autoFocus
                  />
                  <div className="flex justify-end space-x-2">
                    <button
                      type="button"
                      onClick={() => setSearchOpen(false)}
                      className="px-4 py-2 bg-gray-200 dark:bg-gray-600 rounded hover:bg-gray-300 dark:hover:bg-gray-500"
                    >
                      Cancel
                    </button>
                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                      Search
                    </button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Notifications Modal */}
        <AnimatePresence>
          {notifications.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden"
            >
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Notifications</h3>
                {notifications.map((notification) => (
                  <div key={notification.id} className="mb-2 p-2 bg-gray-100 dark:bg-gray-700 rounded">
                    {notification.message}
                  </div>
                ))}
                <button
                  onClick={() => setNotifications([])}
                  className="w-full mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Clear All
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

