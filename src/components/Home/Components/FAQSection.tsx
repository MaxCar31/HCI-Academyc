import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';

const faqs = [
  {
    question: "faq.question1",
    answer: "faq.answer1"
  },
  {
    question: "faq.question2",
    answer: "faq.answer2"
  },
  {
    question: "faq.question3",
    answer: "faq.answer3"
  },
  {
    question: "faq.question4",
    answer: "faq.answer4"
  },
  {
    question: "faq.question5",
    answer: "faq.answer5"
  }
];

export function FAQSection() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            {t('faqSection.title')}
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {t('faqSection.description')}
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4">
                <Button
                  variant="outline"
                  className="w-full justify-between text-left px-6 py-4 text-lg font-medium"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  {t(faq.question)}
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-red-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-red-600" />
                  )}
                </Button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 bg-white border border-t-0 rounded-b-lg">
                        <p className="text-slate-600">{t(faq.answer)}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          {/* Additional content can go here */}
        </motion.div>
      </div>
    </section>
  );
}