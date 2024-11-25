
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Star, Clock, BookOpen, ChevronRight, PlayCircle, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"

export default function CourseOverview() {

  const [activeTab, setActiveTab] = useState("descripcion")

  const courseData = {
    title: "Español para principiantes: De cero a conversación",
    description: "Este curso está diseñado para hablantes de turco que desean aprender español desde cero. A través de lecciones interactivas, ejercicios prácticos y recursos multimedia, desarrollarás habilidades fundamentales en español.",
    rating: 4.8,
    students: 1234,
    lastUpdated: "Marzo 2024",
    language: "Turco (con subtítulos en español)",
    duration: "30 horas",
    instructor: "Daniel Quispe",
    progress: 7,
  }

  const courseContent = [
    {
      id: 1,
      title: "Introducción al Español",
      lessons: [
        { id: 1, title: "Bienvenida al curso y objetivos", duration: "00:30:00", completed: false },
        { id: 2, title: "El alfabeto español y pronunciación básica", duration: "01:00:00", completed: false },
        { id: 3, title: "Sonidos especiales y comparaciones con el turco", duration: "01:00:00", completed: false },
        { id: 4, title: "Ejercicio práctico de pronunciación", duration: "00:30:00", completed: false },
      ]
    },
    {
      id: 2,
      title: "Saludos y Presentaciones",
      lessons: [
        { id: 5, title: "Saludos y despedidas formales e informales", duration: "01:00:00", completed: false },
        { id: 6, title: "Presentarse y presentar a otros", duration: "01:00:00", completed: false },
        { id: 7, title: "Pronombres personales y verbos ser/estar", duration: "01:00:00", completed: false },
        { id: 8, title: "Diálogos prácticos y role-play", duration: "01:00:00", completed: false },
      ]
    },
    {
      id: 3,
      title: "Números, Fechas y Horas",
      lessons: [
        { id: 9, title: "Números del 0 al 100", duration: "01:00:00", completed: false },
        { id: 10, title: "Fechas, días de la semana y meses", duration: "01:00:00", completed: false },
        { id: 11, title: "Decir la hora y expresiones temporales", duration: "01:00:00", completed: false },
      ]
    },
    {
      id: 4,
      title: "Vocabulario Básico y Expresiones Cotidianas",
      lessons: [
        { id: 12, title: "Colores, formas y tamaños", duration: "01:00:00", completed: false },
        { id: 13, title: "Familia y relaciones", duration: "01:00:00", completed: false },
        { id: 14, title: "Comida y bebida", duration: "01:00:00", completed: false },
        { id: 15, title: "Ejercicios prácticos y juegos de vocabulario", duration: "01:00:00", completed: false },
      ]
    },
    {
      id: 5,
      title: "Gramática Fundamental",
      lessons: [
        { id: 16, title: "Artículos definidos e indefinidos", duration: "01:00:00", completed: false },
        { id: 17, title: "Género y número de los sustantivos", duration: "01:00:00", completed: false },
        { id: 18, title: "Adjetivos calificativos y posesivos", duration: "01:00:00", completed: false },
        { id: 19, title: "Concordancia entre sustantivos y adjetivos", duration: "01:00:00", completed: false },
      ]
    },
    {
      id: 6,
      title: "Verbos y Conjugaciones Básicas",
      lessons: [
        { id: 20, title: "Verbos regulares en presente (-ar, -er, -ir)", duration: "01:00:00", completed: false },
        { id: 21, title: "Verbos irregulares comunes (ser, estar, tener, ir)", duration: "01:00:00", completed: false },
        { id: 22, title: "Oraciones afirmativas, negativas e interrogativas", duration: "01:00:00", completed: false },
        { id: 23, title: "Práctica de conjugación y ejercicios escritos", duration: "01:00:00", completed: false },
      ]
    },
    {
      id: 7,
      title: "Comunicación en Situaciones Cotidianas",
      lessons: [
        { id: 24, title: "En el restaurante: ordenar comida", duration: "01:00:00", completed: false },
        { id: 25, title: "Compras y precios", duration: "01:00:00", completed: false },
        { id: 26, title: "Direcciones y transporte", duration: "01:00:00", completed: false },
        { id: 27, title: "Role-play de situaciones reales", duration: "01:00:00", completed: false },
      ]
    },
    {
      id: 8,
      title: "Lectura y Escritura Básica",
      lessons: [
        { id: 28, title: "Lectura de textos sencillos", duration: "01:00:00", completed: false },
        { id: 29, title: "Comprensión lectora y vocabulario", duration: "01:00:00", completed: false },
        { id: 30, title: "Redacción de oraciones y párrafos simples", duration: "01:00:00", completed: false },
        { id: 31, title: "Corrección y retroalimentación", duration: "01:00:00", completed: false },
      ]
    },
    {
      id: 10,
      title: "Evaluación y Cierre del Curso",
      lessons: [
        { id: 34, title: "Repaso general y aclaración de dudas", duration: "01:00:00", completed: false },
        { id: 35, title: "Evaluación final y certificación", duration: "01:00:00", completed: false },
      ]
    },
  ];
  

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navbar */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <motion.h1
                className="text-3xl font-serif font-bold text-red-600"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                LinguaTurk
              </motion.h1>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <motion.img
              src="Curriculum.jpg"
              alt="Usuario"
              className="h-8 w-8 rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <Button variant="ghost" className="text-slate-700 hover:text-red-600">
              Mi Perfil
            </Button>
          </div>
        </div>
      </header>
  
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Información principal del curso */}
          <motion.div
            className="md:col-span-2 space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold text-slate-800">{courseData.title}</h1>
            <p className="text-lg text-slate-600">{courseData.description}</p>
  
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Star className="text-yellow-400 w-5 h-5" />
                <span className="ml-1 font-semibold">{courseData.rating}</span>
              </div>
              <span className="text-slate-500">({courseData.students} estudiantes)</span>
              <span className="text-slate-500">Actualizado {courseData.lastUpdated}</span>
            </div>
  
            <div className="flex items-center space-x-4 text-slate-600">
              <span className="flex items-center"><BookOpen className="mr-2" /> {courseData.language}</span>
              <span className="flex items-center"><Clock className="mr-2" /> {courseData.duration}</span>
            </div>
  
            <div className="flex items-center space-x-2">
              <img src="/InstructorHome2.png" alt={courseData.instructor} className="h-12 w-12 rounded-full" />
              <div>
                <p className="font-semibold">Instructor</p>
                <p className="text-slate-600">{courseData.instructor}</p>
              </div>
            </div>
  
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList>
                <TabsTrigger value="descripcion">Descripción del curso</TabsTrigger>
                <TabsTrigger value="contenido">Contenido del curso</TabsTrigger>
              </TabsList>
              <TabsContent value="descripcion" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Lo que aprenderás</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Fundamentos de la pronunciación española</li>
                      <li>Vocabulario esencial para conversaciones cotidianas</li>
                      <li>Gramática básica para construir oraciones simples</li>
                      <li>Habilidades de comprensión auditiva y expresión oral</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="contenido" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Contenido del curso</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[400px] pr-4">
                      <Accordion type="single" collapsible className="w-full">
                        {courseContent.map((section) => (
                          <AccordionItem value={`section-${section.id}`} key={section.id}>
                            <AccordionTrigger>{section.title}</AccordionTrigger>
                            <AccordionContent>
                              <ul className="space-y-2">
                                {section.lessons.map((lesson) => (
                                  <li key={lesson.id} className="flex items-center justify-between">
                                    <div className="flex items-center">
                                      {lesson.completed ? (
                                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                      ) : (
                                        <PlayCircle className="w-4 h-4 text-slate-400 mr-2" />
                                      )}
                                      <span>{lesson.title}</span>
                                    </div>
                                    <span className="text-slate-500 text-sm">{lesson.duration}</span>
                                  </li>
                                ))}
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
  
          {/* Tarjeta de inscripción */}
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Comienza tu aprendizaje hoy</CardTitle>
                <CardDescription>Acceso completo al curso</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <Progress value={courseData.progress} className="w-full" />
                  <p className="text-sm text-slate-600 mt-2">{courseData.progress}% completado</p>
                </div>
                <Link to="/CoursePlayer">
                  <Button className="w-full text-lg">
                    Continuar aprendiendo <ChevronRight className="ml-2" />
                  </Button>
                </Link>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-slate-600 text-center w-full">
                  30 días de garantía de devolución del dinero
                </p>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </main>
    </div>
  )}