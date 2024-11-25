import { Button } from "../../ui/button";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

function Navbar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-serif font-bold text-red-600">LinguaTurk</h1>
        <div className="flex items-center space-x-4 ml-auto">
          <select
            className="bg-transparent text-gray-700 focus:outline-none"
            onChange={(e) => changeLanguage(e.target.value)}
          >
            <option value="es" className="bg-white text-gray-700 hover:bg-gray-100 focus:bg-gray-200">
              Español
            </option>
            <option value="tr" className="bg-white text-gray-700 hover:bg-gray-100 focus:bg-gray-200">
              Turco
            </option>
          </select>
          <Link to="/Login">
            <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-600 hover:text-white transition-colors">
              {t('login')}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;