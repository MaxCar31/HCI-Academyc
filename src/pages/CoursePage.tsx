"use client"

import { useState } from "react"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, PlayCircle, FileText, Download, MessageCircle, Video, BookOpen } from 'lucide-react'

export default function CoursePage() {
  const [progress, setProgress] = useState(25)

  const courseContent = [
    {
      id: 1,
      title: "Introducción al español",
      videoUrl: "https://example.com/video1.mp4",
      duration: "10:00",
      completed: true,
      practices: [
        { id: "1a", title: "Práctica de pronunciación", type: "quiz" },
        { id: "1b", title: "Ejercicio de escritura", type: "writing" },
      ]
    },
    {
      id: 2,
      title: "Saludos y presentaciones",
      videoUrl: "https://example.com/video2.mp4",
      duration: "15:30",
      completed: true,
      practices: [
        { id: "2a", title: "Diálogo interactivo", type: "interactive" },
        { id: "2b", title: "Quiz de vocabulario", type: "quiz" },
      ]
    },
    {
      id: 3,
      title: "Vocabulario básico",
      videoUrl: "https://example.com/video3.mp4",
      duration: "20:15",
      completed: false,
      practices: [
        { id: "3a", title: "Juego de memoria", type: "game" },
        { id: "3b", title: "Ejercicio de completar frases", type: "fill-in-blanks" },
      ]
    },
    {
      id: 4,
      title: "Gramática: Artículos y sustantivos",
      videoUrl: "https://example.com/video4.mp4",
      duration: "25:00",
      completed: false,
      practices: [
        { id: "4a", title: "Ejercicios de concordancia", type: "quiz" },
        { id: "4b", title: "Práctica de traducción", type: "translation" },
      ]
    },
    {
      id: 5,
      title: "Práctica de conversación",
      videoUrl: "https://example.com/video5.mp4",
      duration: "30:00",
      completed: false,
      practices: [
        { id: "5a", title: "Simulación de diálogo", type: "roleplay" },
        { id: "5b", title: "Ejercicio de comprensión auditiva", type: "listening" },
      ]
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-serif font-bold text-red-600">Español para principiantes</h1>
          <Progress value={progress} className="w-1/3" />
          <span className="text-slate-600">{progress}% completado</span>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4">Contenido del curso</h2>
              <Accordion type="single" collapsible className="w-full">
                {courseContent.map((section) => (
                  <AccordionItem value={`section-${section.id}`} key={section.id}>
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center">
                          {section.completed ? (
                            <CheckCircle className="text-green-500 mr-2" />
                          ) : (
                            <PlayCircle className="text-slate-400 mr-2" />
                          )}
                          <span className="text-slate-700">{section.title}</span>
                        </div>
                        <span className="text-slate-500 text-sm">{section.duration}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="pl-6 space-y-2">
                        <div className="flex items-center text-slate-600">
                          <Video className="mr-2" size={16} />
                          <a href={section.videoUrl} className="hover:underline">Ver video de teoría</a>
                        </div>
                        {section.practices.map((practice) => (
                          <div key={practice.id} className="flex items-center text-slate-600">
                            <BookOpen className="mr-2" size={16} />
                            <a href={`#practice-${practice.id}`} className="hover:underline">{practice.title}</a>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <Tabs defaultValue="descripcion" className="bg-white rounded-lg shadow-md p-6">
              <TabsList>
                <TabsTrigger value="descripcion">Descripción</TabsTrigger>
                <TabsTrigger value="recursos">Recursos</TabsTrigger>
                <TabsTrigger value="notas">Notas</TabsTrigger>
                <TabsTrigger value="anuncios">Anuncios</TabsTrigger>
              </TabsList>
              <TabsContent value="descripcion">
                <h3 className="text-xl font-bold mb-2">Acerca de este curso</h3>
                <p className="text-slate-600">
                  Este curso está diseñado específicamente para hablantes de turco que desean aprender español. 
                  Cada sección incluye un video de teoría seguido de ejercicios prácticos interactivos. 
                  Cubriremos los fundamentos del idioma, incluyendo gramática básica, vocabulario esencial y 
                  práctica de conversación. Al final del curso, serás capaz de mantener conversaciones simples en español.
                </p>
              </TabsContent>
              <TabsContent value="recursos">
                <h3 className="text-xl font-bold mb-2">Recursos del curso</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="flex items-center text-red-600 hover:underline">
                      <FileText className="mr-2" /> Guía de estudio en PDF
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-red-600 hover:underline">
                      <Download className="mr-2" /> Fichas de vocabulario
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-red-600 hover:underline">
                      <FileText className="mr-2" /> Ejercicios de práctica adicionales
                    </a>
                  </li>
                </ul>
              </TabsContent>
              <TabsContent value="notas">
                <h3 className="text-xl font-bold mb-2">Tus notas</h3>
                <textarea 
                  className="w-full h-32 p-2 border rounded-md" 
                  placeholder="Escribe tus notas aquí..."
                ></textarea>
              </TabsContent>
              <TabsContent value="anuncios">
                <h3 className="text-xl font-bold mb-2">Anuncios del curso</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold">Nuevos videos de práctica disponibles</h4>
                    <p className="text-slate-600">Hemos añadido nuevos videos de práctica para las secciones 3 y 4. ¡No olvides revisarlos!</p>
                  </div>
                  <div>
                    <h4 className="font-bold">Próxima sesión en vivo de preguntas y respuestas</h4>
                    <p className="text-slate-600">Únete a nuestra sesión de preguntas y respuestas el próximo viernes para resolver tus dudas sobre el curso.</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Tu progreso</h3>
                <Progress value={progress} className="mb-2" />
                <p className="text-center text-slate-600 mb-4">{progress}% completado</p>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white mb-4">
                  Continuar aprendiendo
                </Button>
                <div className="space-y-2">
                  <p className="flex items-center text-slate-600">
                    <CheckCircle className="mr-2 text-green-500" /> 2 secciones completadas
                  </p>
                  <p className="flex items-center text-slate-600">
                    <Video className="mr-2" /> 2 videos vistos
                  </p>
                  <p className="flex items-center text-slate-600">
                    <BookOpen className="mr-2" /> 4 prácticas realizadas
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

