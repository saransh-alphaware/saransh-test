"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import type React from "react" // Added import for React
import Image from "next/image"
import Logo from "./assets/Logo.png"

interface LoadingScreenProps {
  children: React.ReactNode
}

export default function LoadingScreen({ children }: LoadingScreenProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // Adjust this time as needed

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-white"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <Image
                src={Logo}
                alt="Adrizz Logo"
                width={80}
                height={80}
                className="object-contain mb-4"
              />
              <span className="text-4xl font-bold bg-gradient-to-r from-[#0d4e9e] to-[#0d4e9e] bg-clip-text text-transparent text-center">
                Adrizz
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!isLoading && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

