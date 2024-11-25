import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Link } from "react-router-dom"

export function CTASection() {
  return (
    <section className="bg-gradient-to-r from-red-500 to-red-600 py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div 
            className="lg:w-1/2 mb-8 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="bg-blue-500 text-white mb-4">¡NUEVA FUNCIÓN!</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              ¡El miedo a hablar español ya no será un problema!
            </h2>
            <p className="text-xl text-white mb-8">
              Gana confianza con nuestros profesores bilingües, quienes te guiarán en tus primeros pasos en español desde el turco.
            </p>
            <Link to="/Login">
            <Button className="bg-white text-red-600 hover:bg-red-50 px-8 py-3 text-lg font-semibold">
              Regístrate Ahora
            </Button>
            </Link>
          
          </motion.div>
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative z-10 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
              <img 
                src="/ScreenShot.png" 
                alt="Clase en vivo de español" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
