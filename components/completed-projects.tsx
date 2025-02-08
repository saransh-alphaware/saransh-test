"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, PlaneTakeoffIcon as PlaneDeparture, Briefcase, PiggyBank } from "lucide-react"
import Ecom from "./assets/Ecom.jpg"
import SocialMedia from "./assets/SocialMedia.jpg"
import SEO from "./assets/SEO.jpg"

const workSteps = [
  {
    icon: PlaneDeparture,
    title: "Plan Your Growth",
    description: "Dream big, strategize with us, and turn plans into profits.",
  },
  {
    icon: Briefcase,
    title: "Handover the project",
    description: "We're your project navigators, turning plans into reality. Smooth sailing guaranteed.",
  },
  {
    icon: PiggyBank,
    title: "Count the profit",
    description: "Sit back, relax, and let the profits set sail. Your success story starts with us!",
  },
]

const projects = [
  {
    title: "E-commerce Redesign",
    description: "Revamped the online store for a major retail brand, resulting in a 40% increase in conversions.",
    image: Ecom,
    tags: ["E-commerce", "UI/UX", "Shopify"],
  },
  {
    title: "Social Media Campaign",
    description: "Developed and executed a viral social media campaign that reached over 1 million users.",
    image: SocialMedia,
    tags: ["Social Media", "Content Strategy", "Paid Advertising"],
  },
  {
    title: "SEO Optimization",
    description:
      "Improved search engine rankings for a B2B software company, leading to a 200% increase in organic traffic.",
    image: SEO,
    tags: ["SEO", "Content Marketing", "Analytics"],
  },
]

export default function CompletedProjects() {
  return (
    <section id="projects" className="py-20 bg-blue-50 dark:bg-[#131312]">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work?</h2>
          <p className="text-gray-600 dark:text-gray-500">
            Our proven process ensures your success at every step of the journey.
          </p>
        </motion.div>

        <div className="relative mb-24">
          {/* <div
            className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 dark:bg-gray-700 transform -translate-y-1/2"
            style={{
              backgroundImage: "linear-gradient(to right, #0d4e9e 50%, transparent 50%)",
              backgroundSize: "20px 1px",
              backgroundRepeat: "repeat-x",
            }}
          ></div> */}
          <div className="relative z-10 flex justify-between">
            {workSteps.map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-lg mb-4 border-2 border-[#0d4e9e]">
                  <step.icon className="w-8 h-8 text-[#0d4e9e]" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-center">{step.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center max-w-[200px]">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Completed Projects</h2>
          <p className="text-gray-600 dark:text-gray-500">
            {`Take a look at some of our recent success stories and see how we've helped businesses achieve their digital marketing goals.`}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6 dark:bg-[#252524]">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 dark:text-gray-400">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" size="sm">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-500 text-white">
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

