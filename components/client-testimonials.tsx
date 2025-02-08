"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Logo from "./assets/Logo"
// import LaxmiLeelaGroup from ".//assets/LaxmiLeelaGroup.png"
// import AgarwalGroup from "./assets/AgarwalGroup.png"
// import PatonConstructions from "./assets/PatonConstructions.png"
import DhulevaGroup from "./assets/DhulevaGroup.png"
import BrassBerry from "./assets/BrassBerry.jpg"
import SudhaStore from "./assets/SudhaStore.png"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO, TechStart Inc.",
    content:
      "Adrizz transformed our online presence. Their strategic approach to digital marketing helped us increase our customer base by 200% in just six months.",
    image: SudhaStore,
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Marketing Director, GrowFast",
    content:
      "The team at Adrizz is exceptional. Their data-driven strategies and creative campaigns have consistently delivered outstanding results for our business.",
    image: BrassBerry,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Founder, EcoLife",
    content:
      "Working with Adrizz has been a game-changer for our startup. Their expertise in social media marketing helped us build a loyal community around our brand.",
    image: DhulevaGroup,
  },
]

const QuoteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="44" height="34" className="w-11 h-8">
    <path
      fillRule="evenodd"
      stroke="currentColor"
      strokeWidth="2"
      fill="currentColor"
      d="M17.360,8.325 C15.490,5.563 11.616,4.762 8.705,6.536 C6.901,7.635 5.815,9.533 5.826,11.567 C5.828,14.854 8.637,17.516 12.101,17.515 C13.290,17.513 14.456,17.192 15.460,16.587 C14.967,17.975 14.049,19.457 12.537,20.942 C11.934,21.533 11.951,22.476 12.574,23.048 C13.198,23.619 14.192,23.604 14.794,23.012 C20.384,17.515 19.658,11.539 17.360,8.333 L17.360,8.325 ZM32.407,8.325 C30.538,5.563 26.663,4.762 23.752,6.536 C21.949,7.635 20.863,9.533 20.873,11.567 C20.875,14.854 23.685,17.516 27.148,17.515 C28.338,17.513 29.503,17.192 30.508,16.587 C30.015,17.975 29.097,19.457 27.585,20.942 C26.982,21.533 26.999,22.476 27.622,23.048 C28.245,23.619 29.239,23.604 29.842,23.012 C35.432,17.515 34.706,11.539 32.407,8.333 L32.407,8.325 Z"
    />
  </svg>
)

export default function ClientTestimonials() {
  return (
    <section className="py-20 bg-blue-50 dark:bg-[#131312]">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Client Testimonials</h2>
          <p className="text-gray-600 dark:text-gray-500">
            {`Don't just take our word for it. Here's what our clients have to say about working with Adrizz.`}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-white dark:bg-[#252524] rounded-[20px] p-9 shadow-lg overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Image Container */}
              <div className="relative mb-6">
                <div className="relative w-44 h-44">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover"
                    sizes="(max-width: 96px) 100vw, 96px"
                  />
                </div>
                {/* Quote Icon */}
                <div className="absolute -top-2 text-[#0d4e9e] dark:text-[#226dc9]">
                  <QuoteIcon />
                </div>
              </div>


              {/* Testimonial Content */}
              <div className="mb-6">
                <p className="text-gray-800 dark:text-gray-300 text-base leading-relaxed">{testimonial.content}</p>
              </div>

              {/* Author Info */}
              <div className="relative z-10">
                <h6 className="font-semibold text-black dark:text-white text-xl mb-1">{testimonial.name}</h6>
                <div className="text-base text-gray-800 dark:text-gray-400">{testimonial.position}</div>
              </div>

              {/* Background Pattern */}
              <Logo className="absolute bottom-9 right-9 pointer-events-none object-contain text-white dark:text-white" width={40} height={40}/>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

