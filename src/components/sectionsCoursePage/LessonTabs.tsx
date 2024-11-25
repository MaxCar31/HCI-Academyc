// components/LessonTabs.tsx

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
    
  } from '@/components/ui/tabs';
  import { BookOpen, Edit, MessageSquare, PlayCircle, ClipboardList } from 'lucide-react';
  

  
//   type LessonTabsProps = {
//     currentLesson: any; // Puedes ajustar el tipo según tus necesidades
//     isExercise: boolean;
//   };
  
  export default function LessonTabs({ currentLesson, isExercise }: LessonTabsProps) {
    return (
      <Tabs defaultValue="detalles" className="flex-1">
        <TabsList className="px-6 bg-white">
          <TabsTrigger value="detalles">
            <BookOpen className="mr-2 h-4 w-4" /> Detalles
          </TabsTrigger>
          <TabsTrigger value="transcripcion">
            <Edit className="mr-2 h-4 w-4" /> Transcripción
          </TabsTrigger>
          <TabsTrigger value="comunidad">
            <MessageSquare className="mr-2 h-4 w-4" /> Comunidad
          </TabsTrigger>
        </TabsList>
        <TabsContent value="detalles" className="p-6">
            {/* Descripción y Recursos */}
            <div className="space-y-6">
                {/* Descripción de la lección */}
                <div>
                <h3 className="text-xl font-semibold mb-2">Descripción</h3>
                <p className="text-slate-700">
                    Esta lección cubre los aspectos fundamentales del español, incluyendo el alfabeto, pronunciación básica y sonidos que no existen en el idioma turco. También se ofrecen ejercicios prácticos para mejorar la fluidez y comprensión.
                </p>
                </div>

                {/* Recursos disponibles */}
                <div>
                <h3 className="text-xl font-semibold mb-2">Recursos</h3>
                <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                    <BookOpen className="w-5 h-5 text-blue-500" />
                    <a href="#" className="text-blue-600 underline hover:text-blue-800">
                        Guía PDF: Introducción al Español
                    </a>
                    </li>
                    <li className="flex items-center space-x-3">
                    <PlayCircle className="w-5 h-5 text-green-500" />
                    <a href="#" className="text-blue-600 underline hover:text-blue-800">
                        Video de Pronunciación Básica
                    </a>
                    </li>
                    <li className="flex items-center space-x-3">
                    <ClipboardList className="w-5 h-5 text-yellow-500" />
                    <a href="#" className="text-blue-600 underline hover:text-blue-800">
                        Ejercicios: Práctica de Pronunciación
                    </a>
                    </li>
                </ul>
                </div>
            </div>
            </TabsContent>
        <TabsContent value="transcripcion">
        <div className="p-6 bg-white rounded-lg shadow-md  mx-auto">

            <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Bienvenidos a la lección sobre
            <a
                href="#0"
                className="text-blue-500 hover:text-blue-700 underline ml-1"
            >
                [00:00]
            </a>
            sonidos especiales y comparaciones con el turco. En esta lección, aprenderemos sobre los sonidos que son únicos en el español y cómo se comparan con los sonidos en el idioma turco.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Primero, vamos a escuchar algunos ejemplos de sonidos especiales en español. Estos sonidos incluyen la "ñ", la "ll", y la "rr". Escuchemos cómo se pronuncian y practiquemos juntos
            <a
                href="#15"
                className="text-blue-500 hover:text-blue-700 underline ml-1"
            >
                [00:15]
            </a>.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Ahora, comparemos estos sonidos con algunos sonidos similares en turco
            <a
                href="#45"
                className="text-blue-500 hover:text-blue-700 underline ml-1"
            >
                [00:45]
            </a>. Notarás que hay algunas diferencias clave que pueden ser desafiantes al principio, pero con práctica, podrás dominarlos.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Finalmente, repasaremos algunas palabras y frases comunes que utilizan estos sonidos especiales
            <a
                href="#75"
                className="text-blue-500 hover:text-blue-700 underline ml-1"
            >
                [01:15]
            </a>. Asegúrate de repetir después de mí para practicar tu pronunciación.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-700">
            Gracias por unirte a esta lección
            <a
                href="#120"
                className="text-blue-500 hover:text-blue-700 underline ml-1"
            >
                [02:00]
            </a>. ¡Sigue practicando y nos vemos en la próxima lección!
            </p>
        </div>
        </TabsContent>
        <TabsContent value="comunidad" className="p-6 bg-gray-50">                
            {/* Título */}
            <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-800">Preguntas y Respuestas</h3>
            </div>

            {/* Lista de preguntas */}
            <ul className="space-y-6">
                {/* Pregunta principal */}
                <li>
                <div className="flex space-x-4">
                    {/* Avatar */}
                    <img
                    src="/Alumno1.jpg"
                    alt="Avatar"
                    className="w-10 h-10 rounded-full"
                    />
                    {/* Contenido */}
                    <div className="flex-1">
                    <div className="bg-white p-4 rounded-2xl shadow">
                        <p className="text-gray-900 font-semibold">Ali Yılmaz</p>
                        <p className="text-gray-700">
                        ¿Cómo se pronuncia la letra "Ñ"?
                        </p>
                        <div className="mt-2 flex items-center text-gray-500 text-sm space-x-4">
                        <span>1 día</span>
                
                        <button className="hover:underline">Responder</button>
                        <button className="hover:underline">Ver traducción</button>
                        </div>
                    </div>
                    {/* Respuesta */}
                    <div className="mt-4 pl-12">
                        <div className="flex space-x-4">
                        {/* Avatar */}
                        <img
                            src="/Instructor1.jpg"
                            alt="Avatar"
                            className="w-8 h-8 rounded-full"
                        />
                        {/* Contenido */}
                        <div className="flex-1 bg-gray-100 p-3 rounded-2xl shadow">
                            <p className="text-gray-900 font-semibold">María Gonzalez <span className="text-blue-500 text-sm">Autora</span></p>
                            <p className="text-gray-700">
                            La letra "Ñ" se pronuncia como "ny" en inglés, como en la palabra "canyon".
                            </p>
                            <div className="mt-2 flex items-center text-gray-500 text-sm space-x-4">
                            <span>1 día</span>
                            
                            <button className="hover:underline">Responder</button>
                            <button className="hover:underline">Ver traducción</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </li>

                {/* Otra Pregunta */}
                <li>
                <div className="flex space-x-4">
                    {/* Avatar */}
                    <img
                    src="/Alumno2.jpg"
                    alt="Avatar"
                    className="w-10 h-10 rounded-full"
                    />
                    {/* Contenido */}
                    <div className="flex-1">
                    <div className="bg-white p-4 rounded-2xl shadow">
                        <p className="text-gray-900 font-semibold">Elif Demir</p>
                        <p className="text-gray-700">
                        ¿Hay una regla para saber cuándo usar "el" o "la"?
                        </p>
                        <div className="mt-2 flex items-center text-gray-500 text-sm space-x-4">
                        <span>2 días</span>
                        
                        <button className="hover:underline">Responder</button>
                        <button className="hover:underline">Ver traducción</button>
                        </div>
                    </div>
                    </div>
                </div>
                </li>
            </ul>

            {/* Formulario para agregar preguntas */}
            <div className="mt-8">
                <h4 className="text-xl font-bold text-gray-800 mb-3">¿Tienes una pregunta?</h4>
                <div className="flex space-x-4">
                {/* Avatar del usuario */}
                <img
                    src="/Curriculum.jpg"
                    alt="Tu Avatar"
                    className="w-10 h-10 rounded-full"
                />
                {/* Formulario */}
                <textarea
                    className="flex-1 border border-gray-300 rounded-2xl p-3 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    rows={2}
                    placeholder="Escribe tu pregunta aquí..."
                ></textarea>
                </div>
                <div className="flex justify-end mt-3">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-2xl hover:bg-blue-700 focus:ring-2 focus:ring-blue-400">
                    Publicar
                </button>
                </div>
            </div>
        </TabsContent>
      </Tabs>
    );
  }
      