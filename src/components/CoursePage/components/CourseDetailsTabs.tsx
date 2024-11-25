import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import CourseContentAccordion from "./CourseContentAccordion";

export default function CourseDetailsTabs({ activeTab, setActiveTab, courseContent }:any) {
  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mt-5" >
      <TabsList>
        <TabsTrigger value="descripcion">Descripción del curso</TabsTrigger>
        <TabsTrigger value="contenido">Contenido del curso</TabsTrigger>
      </TabsList>
      <TabsContent value="descripcion" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Lo que aprenderás</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Fundamentos de la pronunciación española</li>
              <li>Vocabulario esencial para conversaciones cotidianas</li>
              <li>Gramática básica para construir oraciones simples</li>
              <li>Habilidades de comprensión auditiva y expresión oral</li>
            </ul>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="contenido" className="mt-4">
        <CourseContentAccordion courseContent={courseContent} />
      </TabsContent>
    </Tabs>
  );
}
