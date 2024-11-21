import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Interno" element={<Home />} />
      </Routes>
    </div>
  );
}
  
export default App;