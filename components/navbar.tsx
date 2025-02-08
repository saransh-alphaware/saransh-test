"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { motion } from "framer-motion"
import { ThemeSwitch } from "./theme-switch"
import Image from "next/image"
import Logo from "./assets/Logo"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [lastScrollTop, setLastScrollTop] = useState(0)
  const [isNavbarVisible, setIsNavbarVisible] = useState(true)
  const [isBouncing, setIsBouncing] = useState(false)
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop

      if (scrollTop > lastScrollTop) {
        // Scroll down - Hide navbar
        setIsBouncing(false)
        setIsNavbarVisible(false)
      } else {
        // Scroll up - Show navbar
        setIsNavbarVisible(true)
      }

      if (scrollTop > 150) {
        setIsBouncing(true)
        setIsNavbarVisible(true)
      }

      // After 300ms of inactivity (scroll stops), apply bounce effect
      const timeout = setTimeout(() => {
        if (scrollTop <= lastScrollTop) {
          setIsBouncing(true)
          setTimeout(() => setIsBouncing(false), 600) // Remove bounce effect after 0.6s
        }
      }, 300)

      setScrollTimeout(timeout)
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop) // Prevent negative values
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (scrollTimeout) {
        clearTimeout(scrollTimeout) // Cleanup the timeout on unmount
      }
    }
  }, [lastScrollTop, scrollTimeout])

  useEffect(() => {
    const html = document.querySelector("html")
    if (html) {
      html.style.scrollBehavior = "smooth"
    }
    return () => {
      if (html) {
        html.style.scrollBehavior = "auto"
      }
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false)
    const section = document.getElementById(sectionId)
    if (section) {
      const yOffset = -80
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  return (
    <motion.nav
      className={`header top-0 left-0 right-0 w-full bg-white/95 dark:bg-gray-900/95 z-50 backdrop-blur-md md:rounded-2xl md:top-4 md:left-4 md:right-4 md:max-w-[85rem] md:mx-auto md:shadow-lg md:border md:border-gray-200/50 dark:md:border-gray-700/50
        ${isNavbarVisible ? "md:fixed" : "md:absolute"} 
        ${isBouncing ? "bounce" : ""}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2">
            <Logo
              width={40}
              height={40}
              className="object-contain text-white"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-[#0d4e9e] to-[#0d4e9e] bg-clip-text text-transparent dark:text-white">
              Adrizz
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {["services", "clients", "projects", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-gray-800 dark:text-gray-200 hover:text-[#0d4e9e] dark:hover:text-[#0d4e9e] transition-colors font-medium capitalize"
              >
                {section}
              </button>
            ))}
            <ThemeSwitch />
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-lg text-gray-800 dark:text-gray-200 hover:text-[#0d4e9e] dark:hover:text-[#0d4e9e] transition-colors font-medium"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("clients")}
                  className="text-lg text-gray-800 dark:text-gray-200 hover:text-[#0d4e9e] dark:hover:text-[#0d4e9e] transition-colors font-medium"
                >
                  Clients
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-lg text-gray-800 dark:text-gray-200 hover:text-[#0d4e9e] dark:hover:text-[#0d4e9e] transition-colors font-medium"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-lg text-gray-800 dark:text-gray-200 hover:text-[#0d4e9e] dark:hover:text-[#0d4e9e] transition-colors font-medium"
                >
                  Contact
                </button>
                <ThemeSwitch />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  )
}

