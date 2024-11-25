import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Clock, Users, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from 'react-i18next';

const courses = [
  {
    id: 1,
    title: "course1.title",
    description: "course1.description",
    image: "/ScreenShot.png",
    level: "course1.level",
    duration: "course1.duration",
    students: 1234,
    rating: 4.8,
  },
  {
    id: 2,
    title: "course2.title",
    description: "course2.description",
    image: "/Curso2.png",
    level: "course2.level",
    duration: "course2.duration",
    students: 876,
    rating: 4.9,
  },
  {
    id: 3,
    title: "course3.title",
    description: "course3.description",
    image: "/curso3.png",
    level: "course3.level",
    duration: "course3.duration",
    students: 567,
    rating: 4.7,
  },
];

export function PopularCourses() {
  const { t } = useTranslation();
  const [hoveredCourse, setHoveredCourse] = useState<number | null>(null);

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
            {t('popularCourses.title')}
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {t('popularCourses.description')}
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
                    alt={t(course.title)} 
                    className="w-full h-48 object-cover transition-transform duration-300 ease-in-out"
                    style={{
                      transform: hoveredCourse === course.id ? 'scale(1.05)' : 'scale(1)'
                    }}
                  />
                  <Badge className="absolute top-2 right-2 bg-white text-slate-800">
                    {t(course.level)}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle>{t(course.title)}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-slate-600 mb-4">{t(course.description)}</p>
                  <div className="flex justify-between text-sm text-slate-500">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {t(course.duration)}
                    </span>
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {course.students} {t('students')}
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
                      {t('viewCourse')}
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
              {t('viewAllCourses')}
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}