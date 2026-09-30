import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GAListener from './GAListener';
import { Suspense, lazy } from 'react';
import { useEffect, useState } from "react"
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';

const Gallery = lazy(() => import('./pages/Gallery'));
const Services = lazy(() => import('./pages/Services'));
const Team = lazy(() => import('./pages/Team'));

function PageLoading() {
  return <div style={{ padding: '2rem', textAlign: 'center' }}>Loading…</div>;
}

const isBotOrCrawler = () => {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') return true;
  if (navigator.webdriver) return true;
  const ua = navigator.userAgent || '';
  return /bot|googlebot|crawler|spider|robot|crawling|lighthouse|headlesschrome|mediapartners-google|bingbot|yandex|duckduckbot|baiduspider|slurp|applebot/i.test(ua);
};

function App() {
  const [loading, setloading] = useState(() => {
    if (typeof window !== 'undefined') {
      if (isBotOrCrawler()) return false;
      const isRoot = window.location.pathname === '/' || window.location.pathname === '';
      const hasSeenLoader = sessionStorage.getItem('hasSeenIntro');
      return isRoot && !hasSeenLoader;
    }
    return false;
  });

  const handleLoaderFinish = () => {
    setloading(false);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('hasSeenIntro', 'true');
    }
  };

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
        {loading && <Loader onFinish={handleLoaderFinish} />}
        <main className="w-full px-0 py-0">
          <Suspense fallback={<PageLoading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/team" element={<Team />} />
          </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
