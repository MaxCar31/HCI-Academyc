import { PlayCircle } from 'lucide-react';
import { Lesson } from '@/data/courseContent';

type VideoPlayerProps = {
  currentLesson: Lesson;
};

export default function VideoPlayer({ currentLesson }: VideoPlayerProps) {
  return (
    <div className="relative">
      <div className="aspect-video bg-black relative">
        {currentLesson.imagen ? (
          <img
            src={currentLesson.imagen}
            alt="Miniatura del video"
            className="object-cover w-full h-auto"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <PlayCircle className="w-16 h-16 text-white opacity-80" />
          </div>
        )}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <PlayCircle className="w-16 h-16 text-white opacity-80" />
        </div>
      </div>
      <h2 className="text-2xl font-bold px-6 py-4">{currentLesson.title}</h2>
    </div>
  );
}
