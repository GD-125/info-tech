import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-6 text-gray-600 dark:text-gray-300">Oops! The page you're looking for doesn't exist.</p>
      <Link
        href="/"
        className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
      >
        Go back to homepage
      </Link>
    </div>
  )
}

