import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import CourseContentAccordion from "./CourseContentAccordion";
import { useTranslation } from 'react-i18next';

export default function CourseDetailsTabs({ activeTab, setActiveTab, courseContent }: any) {
  const { t } = useTranslation();

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mt-5">
      <TabsList>
        <TabsTrigger value="descripcion">{t('courseDetailsTabs.description')}</TabsTrigger>
        <TabsTrigger value="contenido">{t('courseDetailsTabs.content')}</TabsTrigger>
      </TabsList>
      <TabsContent value="descripcion" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>{t('courseDetailsTabs.whatYouWillLearn')}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>{t('courseDetailsTabs.learn1')}</li>
              <li>{t('courseDetailsTabs.learn2')}</li>
              <li>{t('courseDetailsTabs.learn3')}</li>
              <li>{t('courseDetailsTabs.learn4')}</li>
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