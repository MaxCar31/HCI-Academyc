import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export function HeroSection() {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 via-white to-blue-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div 
            className="lg:w-1/2 mb-10 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              {t('heroSection.title')}
              <br />
              <span className="text-red-600">{t('heroSection.subtitle')}</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              {t('heroSection.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-grow">
                <Input
                  type="text"
                  placeholder={t('heroSection.searchPlaceholder')}
                  className="pl-10 pr-4 py-3 w-full text-lg"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
              </div>
              <Link to="/Login">
                <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg">
                  {t('heroSection.startNow')}
                </Button>
              </Link>
            </div>
          </motion.div>
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <img 
                src="/EstudiantesTurcos.png" 
                alt={t('heroSection.imageAlt')} 
                className="rounded-lg max-w-xl ml-10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}