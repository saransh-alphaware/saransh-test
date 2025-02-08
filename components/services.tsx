"use client"

import { BarChart, Globe, Mail, MessageSquare, Search, Share2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Improve your search rankings and drive organic traffic to your website.",
  },
  {
    icon: Globe,
    title: "Social Media Marketing",
    description: "Build your brand presence across all major social media platforms.",
  },
  {
    icon: BarChart,
    title: "Analytics & Reporting",
    description: "Data-driven insights to optimize your marketing campaigns.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Engage your audience with targeted email campaigns.",
  },
  {
    icon: MessageSquare,
    title: "Content Marketing",
    description: "Create compelling content that resonates with your audience.",
  },
  {
    icon: Share2,
    title: "PPC Advertising",
    description: "Maximize ROI with targeted paid advertising campaigns.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-blue-50 dark:bg-[#131312]">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Digital Marketing Services</h2>
          <p className="text-gray-600 dark:tetx-gray-500">
            Comprehensive digital marketing solutions tailored to grow your business
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow dark:dark:bg-[#252524]">
                <CardContent className="p-6">
                  <service.icon className="h-12 w-12 text-[#0d4e9e] mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-base dark:text-gray-400">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

