import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

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
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/top-picks" element={<TopPicks />} />
            <Route path="/art/:id" element={<ArtDescription />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </Router>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
