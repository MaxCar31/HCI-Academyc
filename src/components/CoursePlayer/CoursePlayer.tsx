import { useState } from 'react';
import Navbar from '@/components/CoursePlayer/Components/Navbar';
import VideoPlayer from '@/components/CoursePlayer/Components/VideoPlayer';
import LessonNavigation from '@/components/CoursePlayer/Components/LessonNavigation';
import LessonTabs from '@/components/CoursePlayer/Components/LessonTabs';
import Sidebar from '@/components/CoursePlayer/Components/Sidebar';
import { courseContent, Lesson } from '@/data/courseContent';
import EjercicioSonidos from '@/components/CoursePlayer/Components/EjercicioSonidos';
import { useTranslation } from 'react-i18next';

export default function CoursePlayer() {
  const { t } = useTranslation();

  // Encuentra la lección específica
  const initialLesson: Lesson = courseContent[0].lessons.find(lesson => lesson.id === 3) || courseContent[0].lessons[0];

  const [currentLesson, setCurrentLesson] = useState<Lesson>(initialLesson);
  const [isExercise, setIsExercise] = useState(false);
  const [progress] = useState(15);

  const setCurrentExercise = (section: any) => {
    setCurrentLesson({
      id: -1,
      title: `${t('coursePlayer.exerciseTitle')} - ${section.title}`,
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
            // <VideoPlayer currentLesson={currentLesson} />
            <EjercicioSonidos />
          ) : (
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">{currentLesson.title}</h2>
              <EjercicioSonidos />
            </div>
          )}

          {/* Controles de Navegación */}
          <LessonNavigation progress={progress} />

          {/* Pestañas de Contenido */}
          <LessonTabs />
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