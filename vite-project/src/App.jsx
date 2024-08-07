import { Routes, Route } from 'react-router-dom'; 
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import Donate from './Donate';
import Help from  './Help';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Help" element={<Help />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/*" element={<h1>404 not found</h1>} />
      </Routes>
    </>
  );
}

export default App;