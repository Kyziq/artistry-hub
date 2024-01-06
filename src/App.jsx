import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Test from './pages/Test';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="flex flex-col justify-start items-start min-h-screen">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
