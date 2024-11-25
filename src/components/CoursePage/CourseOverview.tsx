import { useState } from "react";
import Navbar from "./components/Navbar";
import CourseOverviewHeader from "./components/CourseOverviewHeader";
import CourseDetailsTabs from "./components/CourseDetailsTabs";
import EnrollmentCard from "./components/EnrollmentCard";

export default function CourseOverview() {
  const [activeTab, setActiveTab] = useState("descripcion");
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
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <CourseOverviewHeader courseData={courseData} />
            <CourseDetailsTabs
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              courseContent={courseContent}
            />
          </div>
          <div className="md:col-span-1">
            <EnrollmentCard progress={courseData.progress} />
          </div>
        </div>
      </main>
    </div>
  );
}
