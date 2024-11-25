import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from "@/components/ui/button"

const faqs = [
  {
    question: "¿Cómo están diseñados los cursos para hablantes de turco?",
    answer: "Nuestros cursos están específicamente adaptados para hablantes de turco, con explicaciones gramaticales que comparan estructuras turcas y españolas, vocabulario contextualizado para situaciones relevantes, y ejercicios de pronunciación que se centran en los sonidos que suelen ser difíciles para los hablantes de turco."
  },
  {
    question: "¿Qué nivel de español puedo alcanzar con LinguaTurk?",
    answer: "Con LinguaTurk, puedes progresar desde un nivel principiante (A1) hasta un nivel avanzado (C1) según el Marco Común Europeo de Referencia para las lenguas. Ofrecemos cursos para todos los niveles y te ayudamos a prepararte para exámenes oficiales de español."
  },
  {
    question: "¿Cuánto tiempo necesito dedicar al estudio cada día?",
    answer: "Recomendamos dedicar al menos 30 minutos diarios para un progreso constante. Sin embargo, nuestros cursos son flexibles y puedes adaptar tu ritmo de estudio según tu disponibilidad. Lo importante es la consistencia en el aprendizaje."
  },
  {
    question: "¿Ofrecen clases en vivo con profesores?",
    answer: "Sí, ofrecemos clases en vivo con profesores nativos de español que también hablan turco. Estas sesiones complementan el material de estudio autónomo y te permiten practicar la conversación y resolver dudas en tiempo real."
  },
  {
    question: "¿Cómo puedo practicar mi español hablado?",
    answer: "Además de las clases en vivo, ofrecemos clubes de conversación, intercambios de idiomas virtuales con hablantes nativos de español, y ejercicios de pronunciación con tecnología de reconocimiento de voz para que puedas practicar tu español hablado de diversas formas."
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

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
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre aprender español con LinguaTurk
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
                  {faq.question}
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
                        <p className="text-slate-600">{faq.answer}</p>
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

        </motion.div>
      </div>
    </section>
  )
}

