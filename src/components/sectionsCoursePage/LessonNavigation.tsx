// components/LessonNavigation.tsx

import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

type LessonNavigationProps = {
  progress: number;
};

export default function LessonNavigation({ progress }: LessonNavigationProps) {
  return (
    <div className="bg-white px-6 py-4 flex items-center justify-between border-b">
      <Button variant="outline" className="flex items-center">
        <ChevronLeft className="mr-2 h-5 w-5" /> Anterior
      </Button>
      <div className="flex items-center space-x-4">
        <Progress value={progress} className="w-48" />
        <span className="text-sm text-slate-600">{progress}% completado</span>
      </div>
      <Button variant="outline" className="flex items-center">
        Siguiente <ChevronRight className="ml-2 h-5 w-5" />
      </Button>
    </div>
  );
}
