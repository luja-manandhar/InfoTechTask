import { Routes, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from  './components/Footer/Footer';
import AboutPage from './pages/AboutPage';
import Login from './pages/Login';
import Main from "./pages/Main";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";
import BlogPage from "./pages/BlogPage";


function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blogs" element={<BlogPage />} />
            <Route path="/login" element={<Login />} />
        </Routes>
      <Footer />
    </div>
  )
}

export default App;
