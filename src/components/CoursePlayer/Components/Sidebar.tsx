  // components/Sidebar.tsx

  import { ScrollArea } from '@/components/ui/scroll-area';
  import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from '@/components/ui/accordion';
  import { PlayCircle, CheckCircle, ClipboardList, Share2 } from 'lucide-react';
  import { Lesson } from '@/data/courseContent';
  import { Button } from '@/components/ui/button';

  type SidebarProps = {
    courseContent: { id: number; title: string; lessons: Lesson[] }[];
    currentLesson: Lesson;
    isExercise: boolean;
    setCurrentLesson: (lesson: Lesson) => void;
    setIsExercise: (value: boolean) => void;
    setCurrentExercise: (section: any) => void;
  };

  export default function Sidebar({
    courseContent,
    currentLesson,
    isExercise,
    setCurrentLesson,
    setIsExercise,
    setCurrentExercise,
  }: SidebarProps) {
    return (
      <div className="w-[400px] border-l bg-white flex flex-col">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="font-semibold text-lg">Contenido del curso</h2>
          <Button variant="ghost" size="icon">
            <Share2 className="h-5 w-5" />
          </Button>
        </div>
        <ScrollArea className="flex-1 overflow-y-auto">
          <Accordion type="multiple" className="w-full">
            {courseContent.map((section) => (
              <AccordionItem
                value={`section-${section.id}`}
                key={section.id}
                className="border-b last:border-none"
              >
                {/* Trigger de la sección */}
                <AccordionTrigger className="px-4 py-2 hover:bg-slate-100 flex justify-between items-center">
                  <div className="flex flex-col text-left">
                    <span className="text-sm text-slate-600">Sección {section.id}</span>
                    <span className="font-medium">{section.title}</span>
                  </div>
                </AccordionTrigger>

                {/* Contenido de la sección */}
                <AccordionContent>
                  <div className="space-y-1">
                    {section.lessons.map((lesson) => (
                      <button
                        key={lesson.id}
                        className={`w-full px-6 py-2 hover:bg-slate-100 flex items-center justify-between text-left ${
                          lesson.id === currentLesson.id && !isExercise ? 'bg-slate-100' : ''
                        }`}
                        onClick={() => {
                          setCurrentLesson(lesson);
                          setIsExercise(false);
                        }}
                      >
                        <div className="flex items-center">
                          {lesson.completed ? (
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          ) : (
                            <PlayCircle className="w-4 h-4 text-slate-400 mr-2" />
                          )}
                          <span className="text-sm">{lesson.title}</span>
                        </div>
                        <span className="text-xs text-slate-500">{lesson.duration}</span>
                      </button>
                    ))}
                    {/* Añadir Ejercicios de la Sección */}
                    <button
                      className={`w-full px-6 py-2 hover:bg-slate-100 flex items-center text-left ${
                        isExercise && currentLesson.sectionId === section.id ? 'bg-slate-100' : ''
                      }`}
                      onClick={() => setCurrentExercise(section)}
                    >
                      <ClipboardList className="w-4 h-4 text-blue-500 mr-2" />
                      <span className="text-sm font-semibold text-blue-600">
                        Ejercicios de la sección
                      </span>
                    </button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollArea>
      </div>
    );
  }
