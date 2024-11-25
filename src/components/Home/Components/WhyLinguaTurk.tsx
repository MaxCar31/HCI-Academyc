
import { motion } from "framer-motion"
import { GlobeIcon, Users, BookOpen, BadgeIcon as Certificate } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export function WhyLinguaTurk() {
  const features = [
    {
      icon: GlobeIcon,
      title: "Clases en vivo en español y turco",
      description: "Clases interactivas con profesores nativos que hablan tanto español como turco, disponibles en horarios flexibles."
    },
    {
      icon: Users,
      title: "Comunidad de aprendizaje",
      description: "Únete a otros estudiantes turcos que están aprendiendo español. Practica y aprende en grupo."
    },
    {
      icon: BookOpen,
      title: "Contenido especializado",
      description: "Material didáctico diseñado específicamente para hablantes de turco, con explicaciones en tu idioma."
    },
    {
      icon: Certificate,
      title: "Certificación oficial",
      description: "Obtén certificados reconocidos que validan tu nivel de español según el Marco Común Europeo (MCER)."
    }
  ]

  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-16">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          ¿Por qué elegir LinguaTurk?
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
            Más de 1,000 estudiantes turcos ya están aprendiendo español con nosotros. 
            Únete a la comunidad de aprendizaje de idiomas más efectiva.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

