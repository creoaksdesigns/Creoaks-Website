import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Documentation from './pages/Documentation'
import Contact from './pages/Contact'
import { useEffect, useState } from "react"
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [loading, setloading] = useState(true);

  // useEffect(() => {
  //   const handleContextMenu = (e) => {
  //     e.preventDefault();
  //   };
  //   document.addEventListener("contextmenu", handleContextMenu);
  //   return () => document.removeEventListener("contextmenu", handleContextMenu);
  // }, []);

  return (
    <BrowserRouter>
    <ScrollToTop />
      <div className="no-select min-h-screen bg-black">
        <Navbar />
        <>
        {loading && <Loader onFinish={() => setloading(false)} />}
        {!loading && <>
        <main className="w-full px-0 py-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        </> 
        }
        </>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
