import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';

export default function EnrollmentCard({ progress }: any) {
  const { t } = useTranslation();

  return (
    <Card className="sticky top-4">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{t('enrollmentCard.title')}</CardTitle>
        <CardDescription>{t('enrollmentCard.description')}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Progress value={progress} className="w-full" />
          <p className="text-sm text-slate-600 mt-2">{progress}% {t('enrollmentCard.completed')}</p>
        </div>
        <Link to="/CoursePlayer">
          <Button className="w-full text-lg">
            {t('enrollmentCard.continueLearning')} <ChevronRight className="ml-2" />
          </Button>
        </Link>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-slate-600 text-center w-full">
          {t('enrollmentCard.moneyBackGuarantee')}
        </p>
      </CardFooter>
    </Card>
  );
}