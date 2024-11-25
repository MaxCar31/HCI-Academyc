import { Link } from "react-router-dom";
import { Button } from "../../ui/button";
function Navbar(){

    return(
        <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-serif font-bold text-red-600">LinguaTurk</h1>
          <Link to='/Login'>
          <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-600 hover:text-white transition-colors">
            Iniciar sesión
          </Button>
          </Link>
        </div>
      </header>
    )

}

export default Navbar;


