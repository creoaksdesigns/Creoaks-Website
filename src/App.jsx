import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GAListener from './GAListener';
import Home from './pages/Home'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import { useEffect, useState } from "react"
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextMenu);
    return () => document.removeEventListener("contextmenu", handleContextMenu);
  }, []);

  return (
    <BrowserRouter>
    <GAListener />
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
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/portfolio" element={<Gallery />} />
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
