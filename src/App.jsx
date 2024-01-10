import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import ErrorPage from './pages/Error';
import TopPicks from './pages/TopPicks';

function App() {
  return (
    <div className="flex flex-col justify-start items-start min-h-screen bg-gray-100">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/artistry-hub/" element={<Home />} />
          <Route exact path="/artistry-hub/top-picks" element={<TopPicks />} />
          {/* <Route component={GenericNotFound} /> */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
