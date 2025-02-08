"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Lottie from "lottie-react"
import groovyWalkAnimation from "./assets/hero.json";
import AnimatedCounter from "./animated-counter"

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-blue-50 dark:bg-gradient-to-t dark:from-[#131312] dark:to-[#131312]" />

      <div className="container mx-auto px-4 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-5xl font-bold leading-tight">
              Your Creative
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                {" "}
                Marketing Company
              </span>
            </h1>
            <motion.p
              className="mt-6 text-xl text-gray-600 leading-relaxed dark:text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              We help businesses grow through strategic digital marketing solutions. Elevate your brand with data-driven
              campaigns and creative excellence.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-500 text-white">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                View Portfolio
              </Button>
            </motion.div>
            <motion.div
              className="mt-12 flex items-center gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div>
                <h4 className="text-3xl font-bold">
                  <AnimatedCounter end={500} duration={2000} />+
                </h4>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold">
                  <AnimatedCounter end={95} duration={2000} />%
                </h4>
                <p className="text-gray-600">Success Rate</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold">24/7</h4>
                <p className="text-gray-600">Support</p>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative z-10 animation-float">
              <Lottie animationData={groovyWalkAnimation} loop={true} />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-purple-200 to-blue-200 rounded-full blur-3xl opacity-20" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

