import { Link } from 'react-router-dom';

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

        {/* Perfil de Usuario y Selector de Idioma */}
       
        <div className="flex items-center space-x-4">
           <select className="bg-transparent text-gray-700 focus:outline-none">
           <option value="es" className="bg-white text-gray-700 hover:bg-gray-100 focus:bg-gray-200">Español</option>
           <option value="tr" className="bg-white text-gray-700 hover:bg-gray-100 focus:bg-gray-200">Turco</option>
          </select>
          <img src="./Curriculum.jpg" alt="Usuario" className="h-8 w-8 rounded-full" />
      
        </div>
      </div>
    </header>
  );
}