"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react"

export default function Footer() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the newsletter signup
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  return (
    <footer className="bg-blue-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Adrizz
              </span>
            </Link>
            <p className="text-gray-600 mb-4">
              Transforming businesses through innovative digital marketing solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-600 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#clients" className="text-gray-600 hover:text-white transition-colors">
                  Clients
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-600 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-white transition-colors">
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-white transition-colors">
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-white transition-colors">
                  Content Marketing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-white transition-colors">
                  PPC Advertising
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4">Stay updated with our latest news and offers.</p>
            <form onSubmit={handleSubmit} className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white text-white border-gray-700"
              />
              <Button type="submit" size="icon" className="bg-[#0d4e9e] hover:bg-purple-700">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-600">© {new Date().getFullYear()} Adrizz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

