import { Lesson } from '@/data/courseContent';

type VideoPlayerProps = {
  currentLesson: Lesson;
};

export default function VideoPlayer({ currentLesson }: VideoPlayerProps) {
  return (
    <div className="relative">
      <div className="aspect-video bg-black relative">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/6KqNsLirbps"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="object-cover w-full h-full"
        ></iframe>
      </div>
      <h2 className="text-2xl font-bold px-6 py-4">{currentLesson.title}</h2>
    </div>
  );
}