import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'

const links = [
  { to: '/', label: 'Homepage' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/services', label: 'Services' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [menuVisible, setMenuVisible] = useState(false)
  const [isAnimatingIn, setIsAnimatingIn] = useState(false)
  const [isAnimatingOut, setIsAnimatingOut] = useState(false)
  const [bgVisible, setBgVisible] = useState(false)

useEffect(() => {
  const staggerTime = links.length * 100
  const animationDuration = 500

    if (isOpen) {
    setMenuVisible(true)
    setIsAnimatingIn(false)
    setBgVisible(false)

    const bgTimer = setTimeout(() => {
        setBgVisible(true)
    }, 10)

    const linksTimer = setTimeout(() => {
        setIsAnimatingIn(true)
    }, 50)

    return () => {
        clearTimeout(bgTimer)
        clearTimeout(linksTimer)
        }
    }

  if (!isOpen && menuVisible) {
    setIsAnimatingOut(true)
    setIsAnimatingIn(false)

    const linksTimer = setTimeout(() => {
      setBgVisible(false) // THEN fade background
    }, staggerTime)

    const menuTimer = setTimeout(() => {
      setMenuVisible(false)
      setIsAnimatingOut(false)
    }, staggerTime + animationDuration + 500)

    return () => {
      clearTimeout(linksTimer)
      clearTimeout(menuTimer)
    }
  }
}, [isOpen, menuVisible])

  return (
    <header className="bg-black sticky top-0 z-50 py-2">
      <div className="container-max flex items-center justify-between py-4">
        <img src="/logos/creoaksLogo.png" alt="creoaksLogo" decoding="async" className="h-8 md:h-10 w-auto" />

        <button
          onClick={() => setIsOpen((open) => !open)}
          aria-label="Toggle navigation"
          className="relative w-10 h-10 text-white transition hover:bg-black"
        >
          <span
            className={`absolute left-1/2 top-1/2 h-0.5 w-8 -translate-x-1/2 -translate-y-3 rounded-full bg-white transition-all duration-300 ${
              isOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          />
          <span
            className={`absolute left-1/2 top-1/3 h-0.5 w-8 -translate-x-1/2 translate-y-0.5 rounded-full bg-white transition-all duration-300 ${
              isOpen ? '-rotate-45 translate-y-3' : ''
            }`}
          />
          <span
            className={`absolute left-1/3 top-1/3 h-0.5 w-5 -translate-x-2 translate-y-2.5 rounded-full bg-white transition-all duration-300 ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
        </button>
      </div>

      {menuVisible && (
        <div className={`fixed inset-0 z-40 top-[72px] md:top-24 bg-black text-white transition-opacity duration-500 ${bgVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className={`absolute inset-y-0 left-0 flex items-center px-10 md:px-20 transform transition-all duration-500 ${isAnimatingIn ? 'translate-x-0 opacity-100' : ''}`}>
            <nav className="w-full max-w-md space-y-6 md:space-y-8 text-left">
              {links.map((link, index) => (
                <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === '/'}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                    `block text-4xl md:text-5xl transition-all duration-500 ${
                        isAnimatingIn
                        ? 'translate-x-0 opacity-100'
                        : '-translate-x-full opacity-0'
                    } ${
                        isAnimatingOut ? '-translate-x-full opacity-0' : ''
                    } ${
                        isActive ? 'text-orange-400' : 'text-white hover:text-slate-300'
                    }`
                    }
                    style={{
                        textShadow: '0 2px 10px rgba(0,0,0,0.4)',
                        transitionDelay: isAnimatingOut
                            ? `${(links.length - index - 1) * 100}ms` // reverse order
                            : `${index * 100}ms`, // normal order
                        fontFamily: 'Poppins'
                    }}

                   
                    >
                    {link.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar