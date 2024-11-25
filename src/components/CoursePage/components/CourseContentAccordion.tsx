import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PlayCircle, CheckCircle } from "lucide-react";

export default function CourseContentAccordion({ courseContent }:any) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {courseContent.map((section:any) => (
        <AccordionItem value={`section-${section.id}`} key={section.id}>
          <AccordionTrigger>{section.title}</AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-2">
              {section.lessons.map((lesson:any) => (
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
  );
}
