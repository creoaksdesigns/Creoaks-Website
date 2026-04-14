import { Link, NavLink } from 'react-router-dom';
import { motion } from "framer-motion";

const SplitText = ({ children, delay = 0 }) => {
  const words = typeof children === 'string' ? children.split(" ") : [];

  return (
    <>
      {words.map((word, i) => (
        <span key={i} className="inline-flex overflow-hidden">
          <motion.span
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: false, margin: "-10%" }}
            transition={{
              duration: 0.8,
              delay: delay + (i * 0.03),
              ease: "easeOut"
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
          {i < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </>
  );
};

const links = [
  { to: '/', label: <SplitText>Homepage</SplitText> },
  { to: '/portfolio', label: <SplitText>Portfolio</SplitText> },
  { to: '/services', label: <SplitText>Services</SplitText> },
]

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-12 lg:px-20 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12">

        {/* LEFT SIDE */}
        <div className="flex flex-col gap-6 items-start">
          {/* Logo */}
          <Link to="/">
            <img
              src="/logos/creoaksLogo.png"
              alt="Creoaks Logo"
              loading="lazy"
              decoding="async"
              className="w-40"
            />
          </Link>

          {/* Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gray-400 max-w-sm leading-relaxed text-left"
          >
            Got a project in mind? Let’s talk on WhatsApp.
          </motion.p>

          {/* Button */}
          <a href="https://wa.me/2349029967800?text=Hello%20Creoaks%20team%2C%20I%20have%20a%20project%20and%20would%20love%20to%20get%20in%20touch." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center justify-between bg-primary text-black px-6 py-3 md:py-4 rounded-full w-full max-w-sm hover:scale-105 transition"
          >
            <span className="tracking-widest text-sm">
              <SplitText delay={0.1}>MESSAGE US ON WHATSAPP</SplitText>
            </span>
            <i className="fa-solid fa-arrow-right bg-black text-white w-10 h-10 flex items-center justify-center rounded-full ml-4 group-hover:scale-110 transition"></i>
          </a>

          {/* Social Icons */}
          <div className="flex gap-6 text-xl mt-4">
            <a href="https://www.instagram.com/creoaks/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram cursor-pointer hover:text-primary"></i>
            </a>

            <a href='https://www.tiktok.com/@creoaks0' target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-tiktok cursor-pointer hover:text-primary"></i>
            </a>
            

            <a href="https://x.com/Cre0aks" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-twitter cursor-pointer hover:text-primary"></i>
            </a>
          
            
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm mt-6">
            © Copyright {new Date().getFullYear()} - Creoaks. All Rights Reserved.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col md:items-end gap-10">

          {/* Links */}
          <div className="flex flex-col gap-4 text-2xl md:text-right w-full items-start md:items-end">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `block text-3xl hover:scale-105 transition-all duration-500 ${isActive
                    ? 'text-primary'
                    : 'text-white hover:text-primary'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="text-gray-400 md:text-right w-full max-w-xs flex flex-col md:items-end">
            <h4 className="text-white mb-3 text-2xl font-semibold">
              <SplitText>Address</SplitText>
            </h4>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-gray-400 leading-relaxed md:text-right"
            >
              Murg Plaza, Awka Street,<br />
              Garki, Abuja<br />
              +234 902 996 7800
            </motion.p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;