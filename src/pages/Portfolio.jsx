import { motion } from "framer-motion";
import ProtectedImage from "../components/ProtectedImage";
import SplitText from "../components/SplitText";

const portfolioItems = [
  {
    title: "Printing and Production",
    category: "BRANDING",
    date: "APRIL 13 2026",
    image: "/portfolioimgs/nadfNotebook.jpeg",
  },
  {
    title: "Printing and Production",
    category: "BRANDING",
    date: "APRIL 13 2026",
    image: "/portfolioimgs/nadfENV.jpeg",
  },
];

const Portfolio = () => {


  return (
    <div className="w-full bg-white relative">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-auto bg-black text-white pt-32 pb-20 px-8 lg:px-20 overflow-hidden text-center md:text-left">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          <p className="text-gray-400 mb-4 uppercase tracking-widest text-sm">Getting Your Brand Noticed</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            Designing a Better <br /> World Today
          </h1>
          <div className="flex flex-col md:flex-row items-center gap-6 mt-12">
            <a href="#portfolio" className="flex items-center gap-4 rounded-full py-3 px-6 bg-primary text-black hover:scale-105 transition-all duration-300">
              <span className="text-sm font-medium">OUR WORKS</span>
              <div className="bg-black p-3 rounded-full flex items-center justify-center">
                <i className="fa-solid fa-arrow-down text-primary"></i>
              </div>
            </a>
          </div>
        </motion.div>
      </section>

      {/* ================= PORTFOLIO GRID ================= */}
      <section id="portfolio" className="w-full py-24 px-8 lg:px-20 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circles" width="400" height="400" patternUnits="userSpaceOnUse">
                <circle cx="200" cy="200" r="100" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="200" cy="200" r="200" fill="none" stroke="currentColor" strokeWidth="1" />
                <line x1="0" y1="200" x2="400" y2="200" stroke="currentColor" strokeWidth="1" />
                <line x1="200" y1="0" x2="200" y2="400" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circles)" />
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-12 max-w-7xl mx-auto relative z-10">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: (index % 3) * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden mb-6 aspect-[16/10] relative">
                <ProtectedImage
                  src={item.image}
                  alt={item.title}
                  watermarkText="CREOAKS DESIGN"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* View Button Overlay */}
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 pointer-events-none group-hover:pointer-events-auto">
                  <a 
                    href={item.image} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-primary transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                  >
                    <span>VIEW</span>
                    <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                  </a>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3 text-[10px] md:text-xs font-bold tracking-[0.2em]">
                  <span className="text-primary uppercase">{item.category}</span>
                  <span className="text-gray-400 uppercase">{item.date}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="w-full py-24 px-8 lg:px-20 bg-black text-white text-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <span className="text-primary font-medium tracking-widest uppercase mb-4 block"><SplitText>Got a project in mind?</SplitText></span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight flex flex-wrap justify-center">
            <span className="w-full m-0"><SplitText delay={0.1}>Ready to bring your ideas to life?</SplitText></span>
            <span className="w-full m-0"><SplitText delay={0.2}>We're here to help</SplitText></span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            <SplitText delay={0.3}>Let’s talk on WhatsApp and start building something extraordinary together.</SplitText>
          </p>
          <a
            href="https://wa.me/2349029967800?text=Hello%20Creoaks%20team%2C%20I%20have%20a%20project%20and%20would%20love%20to%20get%20in%20touch."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-full py-4 px-8 bg-primary text-black hover:scale-105 transition-all duration-300"
          >
            <i className="fa-brands fa-whatsapp text-2xl"></i>
            <span className="text-lg font-bold">Message us on WhatsApp</span>
          </a>
        </motion.div>
      </section>

    </div>
  );
};

export default Portfolio;
