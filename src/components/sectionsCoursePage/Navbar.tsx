import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo y Nombre */}
        <div className="flex items-center space-x-4">
          <Link to="/">
            <h1 className="text-3xl font-serif font-bold text-red-600">LinguaTurk</h1>
          </Link>
        </div>

        {/* Perfil de Usuario */}
        <div className="flex items-center space-x-4">
          <img src="./Curriculum.jpg" alt="Usuario" className="h-8 w-8 rounded-full" />
          <Button variant="ghost" className="text-slate-700 hover:text-red-600">
            Mi Perfil
          </Button>
        </div>
      </div>
    </header>
  );
}
