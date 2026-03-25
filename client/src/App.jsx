import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Global/Navbar';
import Footer from './Components/Global/Footer';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Product from './Pages/Product/Product';
import Contact from './Pages/Contact/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
