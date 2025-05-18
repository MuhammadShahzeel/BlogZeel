"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { AiOutlineSearch } from "react-icons/ai"
import { FiMoon, FiSun } from "react-icons/fi"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
  
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-white/90 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-100/50 dark:border-gray-800/50 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-5 py-4 flex flex-wrap items-center">
        {/* Logo + Brand */}
        <Link to="/" className="flex items-center space-x-3 group mr-4">
          <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 text-white font-bold flex items-center justify-center rounded-xl shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-purple-300/30 dark:group-hover:shadow-purple-500/20">
            <span className="text-xl font-extrabold tracking-tight">BZ</span>
          </div>
          <span className="text-xl font-bold text-white transition-all duration-300">BlogZeel</span>
        </Link>

        {/* Desktop Search - Adjusted for better positioning */}
        <form className="hidden lg:inline-block lg:flex-1 lg:max-w-md mx-4">
          <div className="relative group w-full">
            <input
              type="text"
              placeholder="Explore articles..."
              className="w-full pl-5 pr-12 py-2.5 bg-gray-50/70 dark:bg-gray-800/70 border border-gray-200/70 dark:border-gray-700/70 rounded-full text-sm text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 shadow-sm group-hover:shadow-md"
            />
            <AiOutlineSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-300 text-xl group-hover:text-purple-500 transition-colors duration-300" />
          </div>
        </form>

        {/* Desktop Nav - Adjusted for better positioning */}
        <ul className="hidden lg:flex lg:flex-1 justify-center space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.path} className="relative">
              <Link
                to={link.path}
                className={`px-3 py-2 transition-all duration-300 relative ${
                  isActive(link.path)
                    ? "text-purple-500 dark:text-purple-400 font-medium"
                    : "text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 dark:bg-purple-400"></span>
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Actions - Moved to the right */}
        <div className="flex items-center ml-auto space-x-4">
          {/* Dark mode toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-full bg-gray-100/80 dark:bg-gray-800/80 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:shadow-md"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <FiSun className="text-xl text-amber-400" />
            ) : (
              <FiMoon className="text-xl text-gray-600 dark:text-gray-300" />
            )}
          </button>

          {/* Sign In Button */}
          <Link
            to="/sign-in"
            className="px-6 py-2.5 text-sm font-semibold rounded-full bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-md hover:shadow-purple-300/30 dark:hover:shadow-purple-500/20 hover:scale-[1.02] transition-all duration-300 transform"
          >
            Sign In
          </Link>

          {/* Hamburger with Animation */}
          <button
            className="lg:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 relative flex items-center justify-center">
              {/* Hamburger Icon Bars */}
              <span
                className={`absolute h-0.5 w-5 bg-gray-800 dark:bg-white rounded-full transition-all duration-300 ease-in-out ${
                  mobileMenuOpen ? "rotate-45" : "-translate-y-1.5"
                }`}
              ></span>
              <span
                className={`absolute h-0.5 w-5 bg-gray-800 dark:bg-white rounded-full transition-all duration-300 ease-in-out ${
                  mobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`absolute h-0.5 w-5 bg-gray-800 dark:bg-white rounded-full transition-all duration-300 ease-in-out ${
                  mobileMenuOpen ? "-rotate-45" : "translate-y-1.5"
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 pb-6 pt-2 space-y-5">
          {/* Search Mobile */}
          <form>
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-5 pr-10 py-3 bg-gray-50/70 dark:bg-gray-800/70 border border-gray-200/70 dark:border-gray-700/70 rounded-full text-sm text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300"
              />
              <AiOutlineSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-300 text-lg" />
            </div>
          </form>

          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`flex items-center px-4 py-3 rounded-lg transition-all duration-300 ${
                    isActive(link.path)
                      ? "text-purple-500 dark:text-purple-400 font-medium"
                      : "text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
