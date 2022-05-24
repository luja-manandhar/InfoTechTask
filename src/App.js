import { Routes, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from  './components/Footer/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import Login from './pages/Login';


function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/blogs" element={<Blogs />} />
            <Route exact path="/login" element={<Login />} />
        </Routes>
      <Footer />
    </div>
  )
}

export default App;
