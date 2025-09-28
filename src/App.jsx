import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Register from "./components/Register";
import Login from "./components/Login";
import ServiceDetail from "./components/ServiceDetail";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Services />
          </>
        } />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services/:name" element={<ServiceDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;