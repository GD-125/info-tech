import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import ChatButton from "@/components/chat-button"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "IT Department - University Name",
  description: "Welcome to the IT Department at University Name. Explore our courses, research, and resources.",
  keywords: ["IT Department", "Computer Science", "University", "Education", "Technology"],
  authors: [{ name: "IT Department" }],
  openGraph: {
    title: "IT Department - University Name",
    description: "Welcome to the IT Department at University Name. Explore our courses, research, and resources.",
    url: "https://it-department.university.edu",
    siteName: "IT Department",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IT Department",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Department - University Name",
    description: "Welcome to the IT Department at University Name. Explore our courses, research, and resources.",
    images: ["/og-image.jpg"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
            <ScrollToTop />
            <ChatButton />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'