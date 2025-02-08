import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Clients from "@/components/clients"
import CompletedProjects from "@/components/completed-projects"
import ClientTestimonials from "@/components/client-testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import LoadingScreen from "@/components/loading-screen"

export default function Home() {
  return (
    <LoadingScreen>
      <div className="relative overflow-hidden">
        {/* Gradient Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        {/* Main Content */}
        <main className="relative z-10 bg-blue-50 dark:bg-[#131312]">
          <Navbar />
          <Hero />
          <Services />
          <Clients />
          <CompletedProjects />
          <ClientTestimonials />
          <Contact />
          <Footer />
        </main>
      </div>
    </LoadingScreen>
  )
}

