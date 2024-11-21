import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import CoursePage from './pages/CoursePage';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CoursePage" element={<CoursePage />} />
      </Routes>
    </div>
  );
}

export default App;