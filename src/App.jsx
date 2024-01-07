import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Test from './pages/Test';
import Footer from './pages/Footer';
function App() {
  return (
    <div className="flex flex-col justify-start items-start min-h-screen bg-gray-100 overflow-hidden">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/artistry-hub/" element={<Home />} />
          <Route exact path="/test" element={<Test />} />
          {/* <Route component={GenericNotFound} /> */}
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
