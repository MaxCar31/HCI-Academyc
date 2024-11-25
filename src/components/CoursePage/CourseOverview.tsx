import { useState } from "react";
import Navbar from "./components/Navbar";
import CourseOverviewHeader from "./components/CourseOverviewHeader";
import CourseDetailsTabs from "./components/CourseDetailsTabs";
import EnrollmentCard from "./components/EnrollmentCard";
import { useTranslation } from 'react-i18next';

export default function CourseOverview() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("descripcion");

  const courseData = {
    title: t("courseOverview.title"),
    description: t("courseOverview.description"),
    rating: 4.8,
    students: 1234,
    lastUpdated: t("courseOverview.lastUpdated"),
    language: t("courseOverview.language"),
    duration: t("courseOverview.duration"),
    instructor: t("courseOverview.instructor"),
    progress: 7,
  }

  const courseContent = [
    {
      id: 1,
      title: t("courseContent.introduction.title"),
      lessons: [
        { id: 1, title: t("courseContent.introduction.lessons.lesson1.title"), duration: "00:30:00", completed: false },
        { id: 2, title: t("courseContent.introduction.lessons.lesson2.title"), duration: "01:00:00", completed: false },
        { id: 3, title: t("courseContent.introduction.lessons.lesson3.title"), duration: "01:00:00", completed: false },
        { id: 4, title: t("courseContent.introduction.lessons.lesson4.title"), duration: "00:30:00", completed: false },
      ]
    },
    {
      id: 2,
      title: t("courseContent.greetings.title"),
      lessons: [
        { id: 5, title: t("courseContent.greetings.lessons.lesson1.title"), duration: "01:00:00", completed: false },
        { id: 6, title: t("courseContent.greetings.lessons.lesson2.title"), duration: "01:00:00", completed: false },
        { id: 7, title: t("courseContent.greetings.lessons.lesson3.title"), duration: "01:00:00", completed: false },
        { id: 8, title: t("courseContent.greetings.lessons.lesson4.title"), duration: "01:00:00", completed: false },
      ]
    },
    {
      id: 3,
      title: t("courseContent.numbers.title"),
      lessons: [
        { id: 9, title: t("courseContent.numbers.lessons.lesson1.title"), duration: "01:00:00", completed: false },
        { id: 10, title: t("courseContent.numbers.lessons.lesson2.title"), duration: "01:00:00", completed: false },
        { id: 11, title: t("courseContent.numbers.lessons.lesson3.title"), duration: "01:00:00", completed: false },
      ]
    },
    {
      id: 4,
      title: t("courseContent.vocabulary.title"),
      lessons: [
        { id: 12, title: t("courseContent.vocabulary.lessons.lesson1.title"), duration: "01:00:00", completed: false },
        { id: 13, title: t("courseContent.vocabulary.lessons.lesson2.title"), duration: "01:00:00", completed: false },
        { id: 14, title: t("courseContent.vocabulary.lessons.lesson3.title"), duration: "01:00:00", completed: false },
        { id: 15, title: t("courseContent.vocabulary.lessons.lesson4.title"), duration: "01:00:00", completed: false },
      ]
    },
    {
      id: 5,
      title: t("courseContent.grammar.title"),
      lessons: [
        { id: 16, title: t("courseContent.grammar.lessons.lesson1.title"), duration: "01:00:00", completed: false },
        { id: 17, title: t("courseContent.grammar.lessons.lesson2.title"), duration: "01:00:00", completed: false },
        { id: 18, title: t("courseContent.grammar.lessons.lesson3.title"), duration: "01:00:00", completed: false },
        { id: 19, title: t("courseContent.grammar.lessons.lesson4.title"), duration: "01:00:00", completed: false },
      ]
    },
    {
      id: 6,
      title: t("courseContent.verbs.title"),
      lessons: [
        { id: 20, title: t("courseContent.verbs.lessons.lesson1.title"), duration: "01:00:00", completed: false },
        { id: 21, title: t("courseContent.verbs.lessons.lesson2.title"), duration: "01:00:00", completed: false },
        { id: 22, title: t("courseContent.verbs.lessons.lesson3.title"), duration: "01:00:00", completed: false },
        { id: 23, title: t("courseContent.verbs.lessons.lesson4.title"), duration: "01:00:00", completed: false },
      ]
    },
    {
      id: 7,
      title: t("courseContent.communication.title"),
      lessons: [
        { id: 24, title: t("courseContent.communication.lessons.lesson1.title"), duration: "01:00:00", completed: false },
        { id: 25, title: t("courseContent.communication.lessons.lesson2.title"), duration: "01:00:00", completed: false },
        { id: 26, title: t("courseContent.communication.lessons.lesson3.title"), duration: "01:00:00", completed: false },
        { id: 27, title: t("courseContent.communication.lessons.lesson4.title"), duration: "01:00:00", completed: false },
      ]
    },
    {
      id: 8,
      title: t("courseContent.reading.title"),
      lessons: [
        { id: 28, title: t("courseContent.reading.lessons.lesson1.title"), duration: "01:00:00", completed: false },
        { id: 29, title: t("courseContent.reading.lessons.lesson2.title"), duration: "01:00:00", completed: false },
        { id: 30, title: t("courseContent.reading.lessons.lesson3.title"), duration: "01:00:00", completed: false },
        { id: 31, title: t("courseContent.reading.lessons.lesson4.title"), duration: "01:00:00", completed: false },
      ]
    },
    {
      id: 10,
      title: t("courseContent.evaluation.title"),
      lessons: [
        { id: 34, title: t("courseContent.evaluation.lessons.lesson1.title"), duration: "01:00:00", completed: false },
        { id: 35, title: t("courseContent.evaluation.lessons.lesson2.title"), duration: "01:00:00", completed: false },
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