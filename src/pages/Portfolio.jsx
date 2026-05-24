import { motion } from "framer-motion";
import ProtectedImage from "../components/ProtectedImage";
import SplitText from "../components/SplitText";
import portfolioItems from "../portfolioData";
import ProjectSection from "../components/portfolio/ProjectSection";

const Portfolio = () => {

  return (
    <div className="w-full bg-white relative">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-auto bg-black text-white pt-24 md:pt-32 pb-16 md:pb-20 px-6 md:px-12 lg:px-20 overflow-hidden text-center md:text-left">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          <p className="text-gray-400 mb-4 uppercase tracking-widest text-sm">Getting Your Brand Noticed</p>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            Designing a Better <br /> World Today
          </h1>
          <div className="flex flex-col md:flex-row items-center gap-6 mt-12">
            <a href="#portfolio" className="flex items-center gap-4 rounded-full py-3 px-6 bg-primary text-black hover:scale-105 transition-all duration-300">
              <span className="text-sm font-medium">OUR DESIGNS</span>
              <div className="bg-black p-3 rounded-full flex items-center justify-center">
                <i className="fa-solid fa-arrow-down text-primary"></i>
              </div>
            </a>
          </div>
        </motion.div>
      </section>

      {/* ================= PORTFOLIO GRID ================= */}
      <div className="max-w-7xl mx-auto relative z-10 space-y-32">
  {portfolioItems.map((project, index) => (
    <ProjectSection
      key={index}
      project={project}
    />
  ))}
</div>

      {/* ================= CALL TO ACTION ================= */}
      <section className="w-full py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-black text-white text-center mt-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <span className="text-primary font-medium tracking-widest uppercase mb-4 block"><SplitText>Got a project in mind?</SplitText></span>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight flex flex-wrap justify-center">
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
            className="flex items-center gap-4 rounded-full py-3 px-6 md:py-4 md:px-8 bg-primary text-black hover:scale-105 transition-all duration-300"
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
