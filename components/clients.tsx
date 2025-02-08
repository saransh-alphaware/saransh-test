"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import AnimatedCounter from "./animated-counter"
import LaxmiLeelaGroup from ".//assets/LaxmiLeelaGroup.png"
import AgarwalGroup from "./assets/AgarwalGroup.png"
import PatonConstructions from "./assets/PatonConstructions.png"
import DhulevaGroup from "./assets/DhulevaGroup.png"
import BrassBerry from "./assets/BrassBerry.jpg"
import SudhaStore from "./assets/SudhaStore.png"


const clients = [
  {
    name: "Laxmi Leela Group",
    logo: LaxmiLeelaGroup,
    description: "Real Estate Partner",
  },
  {
    name: "Agarwal Group",
    logo: AgarwalGroup,
    description: "Construction Partner",
  },
  {
    name: "Paton Constructions",
    logo: PatonConstructions,
    description: "Infrastructure Partner",
  },
  {
    name: "Dhuleva Group",
    logo: DhulevaGroup,
    description: "Development Partner",
  },
  {
    name: "Brassberry",
    logo: BrassBerry,
    description: "Lifestyle Partner",
  },
  {
    name: "Sudha's Store",
    logo: SudhaStore,
    description: "Retail Partner",
  },
]

export default function Clients() {
  return (
    <section id="clients" className="py-20 bg-blue-50 dark:bg-[#131312]">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Valued Partners</h2>
          <p className="text-gray-600 dark:text-gray-500">Trusted by industry leaders across various sectors</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-none hover:shadow-lg transition-shadow dark:bg-[#252524]">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="relative w-full h-32 mb-4 flex items-center justify-center">
                    <Image
                      src={client.logo || "/placeholder.svg"}
                      alt={client.name}
                      width={150}
                      height={75}
                      className="object-contain max-w-full max-h-full"
                      priority={index < 3}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = "/placeholder.svg"
                      }}
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{client.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{client.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-4xl font-bold text-[#0d4e9e]">
                <AnimatedCounter end={500} duration={2000} />+
              </h4>
              <p className="text-gray-600 mt-2 dark:text-gray-500">Clients Worldwide</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-[#0d4e9e]">
                <AnimatedCounter end={1000} duration={2000} />+
              </h4>
              <p className="text-gray-600 mt-2 dark:text-gray-500">Projects Completed</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-[#0d4e9e]">
                <AnimatedCounter end={95} duration={2000} />%
              </h4>
              <p className="text-gray-600 mt-2 dark:text-gray-500">Client Satisfaction</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

