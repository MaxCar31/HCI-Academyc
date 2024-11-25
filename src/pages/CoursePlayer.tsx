import { useState } from 'react';
import Navbar from '@/components/sectionsCoursePage/Navbar';
import VideoPlayer from '@/components/sectionsCoursePage/VideoPlayer';
import LessonNavigation from '@/components/sectionsCoursePage/LessonNavigation';
import LessonTabs from '@/components/sectionsCoursePage/LessonTabs';
import Sidebar from '@/components/sectionsCoursePage/Sidebar';
import { courseContent } from '@/data/courseContent';
import EjercicioSonidos from '@/components/sectionsCoursePage/EjercicioSonidos';

export default function CoursePlayer() {
  const [currentLesson, setCurrentLesson] = useState(courseContent[0].lessons[0]);
  const [isExercise, setIsExercise] = useState(false);
  const [progress] = useState(15);

  const setCurrentExercise = (section: any) => {
    setCurrentLesson({
      id: -1,
      title: `Ejercicios - ${section.title}`,
      duration: '0:00',
      completed: false,
      type: 'exercise',
      exerciseId: `exercise-${section.id}`,
      sectionId: section.id,
    });
    setIsExercise(true);
  };

  return (
    <div className="flex flex-col h-screen bg-slate-50">
      {/* Navbar */}
      <Navbar />

      <div className="flex flex-1">
        {/* Contenido Principal */}
        <div className="flex-1 flex flex-col">
          {/* Video o Ejercicios */}
          {!isExercise ? (
            <VideoPlayer currentLesson={currentLesson} />
          ) : (
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">{currentLesson.title}</h2>
              <EjercicioSonidos />
            </div>
          )}

          {/* Controles de Navegación */}
          <LessonNavigation progress={progress} />

          {/* Pestañas de Contenido */}
          <LessonTabs/>
        </div>

        {/* Barra Lateral del Curso */}
        <Sidebar
          courseContent={courseContent}
          currentLesson={currentLesson}
          isExercise={isExercise}
          setCurrentLesson={setCurrentLesson}
          setIsExercise={setIsExercise}
          setCurrentExercise={setCurrentExercise}
        />
      </div>
    </div>
  );
}
