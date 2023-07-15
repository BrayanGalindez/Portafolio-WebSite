// import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "../src/components/Navbar.jsx";
import Footer from "../src/components/Footer.jsx";
import Home from "../src/pages/Home.jsx";

function App() {
  return (
        <BrowserRouter>
          <div id="root" className="flex flex-col min-h-screen">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
  );
}
export default App;
