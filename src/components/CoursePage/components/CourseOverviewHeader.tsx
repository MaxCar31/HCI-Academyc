import { Star, BookOpen, Clock } from "lucide-react";

export default function CourseOverviewHeader({ courseData }:any) {
  return (
    <div className="space-y-6">
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
      <div className="flex items-center space-x-4 text-slate-600" >
        <span className="flex items-center"><BookOpen className="mr-2" /> {courseData.language}</span>
        <span className="flex items-center"><Clock className="mr-2" /> {courseData.duration}</span>
      </div>
      <div className="flex items-center space-x-2 ">
              <img src="/InstructorHome2.png" alt={courseData.instructor} className="h-12 w-12 rounded-full" />
              <div>
                <p className="font-semibold">Instructor</p>
                <p className="text-slate-600">{courseData.instructor}</p>
              </div>
    </div>
    </div>
  );
}
