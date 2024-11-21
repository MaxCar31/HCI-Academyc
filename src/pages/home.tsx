import { Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-serif font-bold text-red-600">EspañolTurco</h1>
          <nav>
            <ul className="flex space-x-6 text-slate-700">
              <li><a href="#" className="hover:text-red-600 transition-colors">Inicio</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Cursos</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Profesores</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Recursos</a></li>
            </ul>
          </nav>
          <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-600 hover:text-white transition-colors">
            Iniciar sesión
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-slate-800 mb-4">Aprende español desde Turquía</h2>
          <p className="text-xl text-slate-600 mb-6">Cursos diseñados específicamente para hablantes de turco</p>
          <div className="flex justify-center">
            <div className="relative w-full max-w-xl">
              <Input type="text" placeholder="Buscar cursos, lecciones, o temas..." className="pl-10 pr-4 py-2 w-full" />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-serif font-bold text-slate-800 mb-4">Cursos populares</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((course) => (
              <div key={course} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-40 bg-red-100"></div>
                <div className="p-4">
                  <h4 className="font-bold text-lg mb-2">Español para principiantes {course}</h4>
                  <p className="text-slate-600 text-sm mb-4">Aprende las bases del español con nuestro curso interactivo.</p>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Ver curso</Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-serif font-bold text-slate-800 mb-4">¿Por qué aprender con nosotros?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl mb-2">🇪🇸</div>
              <h4 className="font-bold mb-2">Enfoque en turco-hablantes</h4>
              <p className="text-slate-600">Contenido adaptado a las necesidades específicas de los hablantes de turco.</p>
            </div>
            <div>
              <div className="text-4xl mb-2">🎓</div>
              <h4 className="font-bold mb-2">Profesores nativos</h4>
              <p className="text-slate-600">Aprende con profesores españoles experimentados en enseñar a turco-hablantes.</p>
            </div>
            <div>
              <div className="text-4xl mb-2">📱</div>
              <h4 className="font-bold mb-2">Aprendizaje flexible</h4>
              <p className="text-slate-600">Accede a tus cursos en cualquier momento y desde cualquier dispositivo.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 EspañolTurco. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

