import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EnrollmentCard({ progress }:any) {
  return (
    <Card className="sticky top-4">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Comienza tu aprendizaje hoy</CardTitle>
        <CardDescription>Acceso completo al curso</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Progress value={progress} className="w-full" />
          <p className="text-sm text-slate-600 mt-2">{progress}% completado</p>
        </div>
        <Link to="/CoursePlayer">
          <Button className="w-full text-lg">
                Continuar aprendiendo <ChevronRight className="ml-2" />
         </Button>
        </Link>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-slate-600 text-center w-full">
          30 días de garantía de devolución del dinero
        </p>
      </CardFooter>
    </Card>
  );
}
