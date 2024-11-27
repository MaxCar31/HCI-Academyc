import { Routes, Route, useLocation } from 'react-router-dom';
// import Home from './components/Home/home';
import CourseOverview from './components/CoursePage/CourseOverview';
import CoursePlayer from './components/CoursePlayer/CoursePlayer';
import { useLoadingAnimation } from './Hooks/useLoadingSpinner';
import RegisterPage from './pages/LoginPage';
import Loading from './Hooks/Loading';
import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // Asegúrate de que la ruta sea correcta

function App() {
  const { isLoading, startLoading, stopLoading } = useLoadingAnimation();
  const location = useLocation();

  useEffect(() => {
    startLoading();
    const timer = setTimeout(() => {
      stopLoading();
    }, 150);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <I18nextProvider i18n={i18n}>
      <div>
        {isLoading && <Loading />}
        <Routes>
          <Route path="/" element={<Loading />} />
          <Route path="/CoursePage" element={<CourseOverview />} />
          <Route path="/CoursePlayer" element={<CoursePlayer />} />
          <Route path="/Login" element={<RegisterPage />} />
        </Routes>
      </div>
    </I18nextProvider>
  );
}

export default App;