import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import { Spinner } from '@nextui-org/react';

// Lazy loading of route components
const Home = lazy(() => import('./pages/Home'));
const TopPicks = lazy(() => import('./pages/TopPicks'));
const ArtDescription = lazy(() => import('./pages/ArtDescription'));
const ErrorPage = lazy(() => import('./pages/Error'));

function App() {
  return (
    <div className="flex flex-col justify-start items-start min-h-screen bg-gray-100">
      <Router basename="/artistry-hub/">
        <Navbar />

        {/* Suspense fallback during lazy loading */}
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-screen fixed top-0 left-0 w-full bg-gray-100">
              <Spinner size="lg" />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/top-picks" element={<TopPicks />} />
            <Route path="/art/:id" element={<ArtDescription />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
