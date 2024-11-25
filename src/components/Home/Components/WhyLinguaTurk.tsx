import { motion } from "framer-motion";
import { GlobeIcon, Users, BookOpen, BadgeIcon as Certificate } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from 'react-i18next';

export function WhyLinguaTurk() {
  const { t } = useTranslation();

  const features = [
    {
      icon: GlobeIcon,
      title: t("whyLinguaTurk.feature1.title"),
      description: t("whyLinguaTurk.feature1.description")
    },
    {
      icon: Users,
      title: t("whyLinguaTurk.feature2.title"),
      description: t("whyLinguaTurk.feature2.description")
    },
    {
      icon: BookOpen,
      title: t("whyLinguaTurk.feature3.title"),
      description: t("whyLinguaTurk.feature3.description")
    },
    {
      icon: Certificate,
      title: t("whyLinguaTurk.feature4.title"),
      description: t("whyLinguaTurk.feature4.description")
    }
  ];

  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-16">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t('whyLinguaTurk.title')}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
                      <feature.icon className="w-8 h-8 text-red-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-slate-800">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t('whyLinguaTurk.footer')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}