import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Star, Clock, Users, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const courses = [
  {
    id: 1,
    title: "Español para Principiantes",
    description: "Domina los fundamentos del español con nuestro curso interactivo diseñado para hablantes de turco.",
    image: "/ScreenShot.png",
    level: "Principiante",
    duration: "8 semanas",
    students: 1234,
    rating: 4.8,
  },
  {
    id: 2,
    title: "Conversación Avanzada",
    description: "Mejora tu fluidez y confianza al hablar español con temas de conversación avanzados y ejercicios prácticos.",
    image: "/curso-conversacion.jpg",
    level: "Avanzado",
    duration: "6 semanas",
    students: 876,
    rating: 4.9,
  },
  {
    id: 3,
    title: "Español para Negocios",
    description: "Aprende vocabulario y habilidades específicas para el mundo empresarial hispanohablante.",
    image: "/curso-negocios.jpg",
    level: "Intermedio",
    duration: "10 semanas",
    students: 567,
    rating: 4.7,
  },
]

export function PopularCourses() {
  const [hoveredCourse, setHoveredCourse] = useState<number | null>(null)

  return (
    <section id="cursos" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Cursos Populares
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Descubre nuestros cursos más solicitados, diseñados específicamente para hablantes de turco que desean aprender español.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                className="overflow-hidden h-full flex flex-col"
                onMouseEnter={() => setHoveredCourse(course.id)}
                onMouseLeave={() => setHoveredCourse(null)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-48 object-cover transition-transform duration-300 ease-in-out"
                    style={{
                      transform: hoveredCourse === course.id ? 'scale(1.05)' : 'scale(1)'
                    }}
                  />
                  <Badge className="absolute top-2 right-2 bg-white text-slate-800">
                    {course.level}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle>{course.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-slate-600 mb-4">{course.description}</p>
                  <div className="flex justify-between text-sm text-slate-500">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {course.duration}
                    </span>
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {course.students} estudiantes
                    </span>
                    <span className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-yellow-400" />
                      {course.rating}
                    </span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link to="/login" className="w-full">
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                      Ver Curso
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link to="/cursos">
            <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
              Ver todos los cursos
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

