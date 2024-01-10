import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import TopPicks from './pages/TopPicks';
import ArtDescription from './pages/ArtDescription';
import ErrorPage from './pages/Error';

function App() {
  return (
    <div className="flex flex-col justify-start items-start min-h-screen bg-gray-100">
      <Router>
        {/* Navigation Bar */}
        <Navbar />

        {/* Route Definitions */}
        <Routes>
          {/* Home Page */}
          <Route exact path="/artistry-hub/" element={<Home />} />

          {/* Top Picks Page */}
          <Route exact path="/artistry-hub/top-picks" element={<TopPicks />} />

          {/* Art Description Page */}
          <Route path="/artistry-hub/art/:id" element={<ArtDescription />} />

          {/* Fallback Error Page for Unmatched Routes */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>

      {/* Footer */}
      <Footer />
    </div>
  );
}
export default App;
