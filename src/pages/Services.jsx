import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const approachSteps = [
  {
    title: "1. SHARE YOUR VISION",
    content: ["Tell us what you want to achieve and how you want to be seen.", "We restate your brief so we’re perfectly aligned."]
  },
  {
    title: "2. GET CUSTOM CONCEPTS",
    content: ["We develop unique concepts for your brand and present clear options."]
  },
  {
    title: "3. CHOOSE & REFINE",
    content: ["Pick your favorite concept. We refine it with your feedback until it’s right."]
  },
  {
    title: "4. WE IMPLEMENT",
    content: ["We design final assets for every format. If printing, we handle production to spec."]
  },
  {
    title: "5. DELIVER & SUPPORT",
    content: ["We deliver on time and stay available for updates or reprints as needed."]
  }
];

const servicesList = [
  {
    title: "Graphics Design",
    description: "Professional, custom visuals that connect, convert, and grow your brand. From concepts to launch, we bring your vision to life beautifully.",
    list: ["Logos & Brand Identity", "Brochures, Flyers & Posters", "Social Media Graphics"],
    whatsapp: "https://wa.me/2349029967800?text=Hello%20Creoaks%20team%2C%20I%20need%20more%20info%20on%20your%20Graphics%20Design%20service.",
    icon: "fa-solid fa-pen-nib"
  },
  {
    title: "Digital Printing",
    description: "Quick, vibrant, high‑quality prints for small projects. Perfect when you need sharp results — fast and cost‑effective.",
    list: ["Business Cards", "Invitations", "Custom Leaflets"],
    whatsapp: "https://wa.me/2349029967800?text=Hello%20Creoaks%20team%2C%20I%20need%20more%20info%20on%20your%20Digital%20Printing%20service.",
    icon: "fa-solid fa-print"
  },
  {
    title: "Offset Printing",
    description: "Premium quality for large‑volume jobs. Consistent, professional results ideal for campaigns and corporate materials.",
    list: ["Magazines", "Corporate Brochures", "Reports"],
    whatsapp: "https://wa.me/2349029967800?text=Hello%20Creoaks%20team%2C%20I%20need%20more%20info%20on%20your%20Offset%20Printing%20service.",
    icon: "fa-solid fa-layer-group"
  },
  {
    title: "Large Format Printing",
    description: "Bold, durable prints designed to grab attention. Make your message impossible to ignore, indoors or outdoors.",
    list: ["Event Banners", "Posters & Signage", "Wall & Window Graphics"],
    whatsapp: "https://wa.me/2349029967800?text=Hello%20Creoaks%20team%2C%20I%20need%20more%20info%20on%20your%20Large%20Format%20Printing%20service.",
    icon: "fa-solid fa-expand"
  },
  {
    title: "Custom Packaging and Labels",
    description: "Eye‑catching boxes, stickers, and labels that make your products retail‑ready and unforgettable.",
    list: ["Eco‑friendly Options", "Brand‑Consistent Designs", "Retail‑Ready Packaging"],
    whatsapp: "https://wa.me/2349029967800?text=Hello%20Creoaks%20team%2C%20I%20need%20more%20info%20on%20your%20Custom%20Packaging%20and%20Labels%20service.",
    icon: "fa-solid fa-box-open"
  },
  {
    title: "Branding Consultation",
    description: "Build a consistent, memorable brand that resonates. We’ll help clarify your message, visuals, and strategy.",
    list: ["Clear Brand Messaging", "Visual Identity Development", "Strategic Brand Planning"],
    whatsapp: "https://wa.me/2349029967800?text=Hello%20Creoaks%20team%2C%20I%20need%20more%20info%20on%20your%20Branding%20Consultation%20service.",
    icon: "fa-solid fa-lightbulb"
  }
];

const SplitText = ({ children, delay = 0 }) => {
  const words = typeof children === 'string' ? children.split(" ") : [];
  return words.map((word, i) => (
    <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
      <motion.span
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: false, margin: "-10%" }}
        transition={{ duration: 1, delay: delay + (i * 0.02), ease: "easeOut" }}
        className="inline-block origin-bottom"
      >
        {word}
      </motion.span>
    </span>
  ));
};

const Services = () => {
  const [openAccordion, setOpenAccordion] = useState(0);

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
          <p className="text-gray-400 mb-4 uppercase tracking-widest text-sm"><SplitText>Getting Your Brand Noticed</SplitText></p>
          <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight flex flex-wrap justify-center md:justify-start">
            <p className="w-full m-0"><SplitText>Brand Design</SplitText></p>
            <p className="w-full m-0"><SplitText delay={0.2}>and Printing</SplitText></p>
          </h1>
          <div className="flex flex-col md:flex-row items-center gap-6 mt-12">
            <a href="#services" className="flex items-center gap-4 rounded-full py-3 px-6 bg-primary text-black hover:scale-105 transition-all duration-300">
              <span className="text-sm font-medium">DISCOVER MORE</span>
              <div className="bg-black p-3 rounded-full flex items-center justify-center">
                <i className="fa-solid fa-arrow-down text-primary"></i>
              </div>
            </a>
          </div>
        </motion.div>
      </section>

      {/* ================= OUR APPROACH ================= */}
      <section id="approach" className="w-full py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <h2 className="text-3xl md:text-5xl mb-8 text-black leading-tight border-b-0 flex flex-wrap">
              <span className="w-full m-0"><SplitText>Our Approach</SplitText></span>
              <span className="w-full m-0"><SplitText delay={0.1}>and Work Specifics</SplitText></span>
            </h2>
            <p className="text-gray-500 mb-12 leading-relaxed max-w-sm">
              You want your brand to get noticed. Sometimes that means deploying marketing campaigns. Other times, it’s getting the right brand designs or print materials—fast and stress-free.At Creoaks, we guide you through a clear, proven process to get results:
            </p>
            <a
              href="#services"
              className="inline-flex items-center gap-4 text-black text-sm font-bold tracking-widest uppercase hover:opacity-75 transition-opacity"
            >
              VIEW WORKS
              <div className="bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center">
                <i className="fa-solid fa-arrow-right text-gray-700"></i>
              </div>
            </a>
          </motion.div>
          
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col w-full"
          >
            {approachSteps.map((step, index) => {
              const isOpen = openAccordion === index;
              return (
                <div key={index} className="border-b border-gray-200 mb-6 pb-6">
                  <button
                    onClick={() => setOpenAccordion(isOpen ? -1 : index)}
                    className="w-full flex items-center justify-between group text-left"
                  >
                    <span className="border border-gray-400 px-2 py-0.5 text-xs font-bold tracking-widest text-black uppercase">
                      {step.title}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                        isOpen ? 'bg-primary text-black' : 'bg-gray-200 text-gray-500 group-hover:bg-gray-300'
                      }`}
                    >
                      {isOpen ? (
                        <i className="fa-solid fa-arrow-up text-base"></i>
                      ) : (
                        <i className="fa-solid fa-arrow-down text-base"></i>
                      )}
                    </div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 text-gray-500 leading-relaxed text-base space-y-4 pr-12">
                          {step.content.map((paragraph, pIdx) => (
                            <p key={pIdx}>{paragraph}</p>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
            
            <div className="mt-8 pt-4">
              <a
                href="https://wa.me/2349029967800?text=Hello%20Creoaks%20team%2C%20I%20want%20to%20discuss%20a%20new%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 text-black text-sm font-bold tracking-widest uppercase hover:opacity-75 transition-opacity"
              >
                LET'S START YOUR PROJECT
                <div className="bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center">
                  <i className="fa-solid fa-arrow-right text-gray-700"></i>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section id="services" className="w-full py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-4"><SplitText>Our Services</SplitText></h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="group cursor-pointer bg-white p-8 md:p-10 lg:p-12 border border-gray-100 flex flex-col h-full hover:shadow-xl transition-all duration-500"
              >
                <h3 className="text-3xl font-bold text-black mb-8 leading-tight">
                  {service.title.split(' ').map((word, i) => (
                    <span key={i} className="block">{word}</span>
                  ))}
                </h3>
                <p className="text-gray-400 text-sm leading-[1.8] mb-12 flex-grow max-w-xs">
                  {service.description}
                </p>
                
                <div className="mb-10">
                  {service.list.map((item, i) => (
                    <div key={i} className="border-t border-gray-100 py-5 text-[10px] tracking-[0.2em] font-bold text-gray-800 uppercase">
                      {item}
                    </div>
                  ))}
                  <div className="border-t border-gray-100"></div>
                </div>
                
                <a
                  href={service.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between group/link"
                >
                  <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-gray-800">
                    EXPLORE THIS SERVICE
                  </span>
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-gray-200">
                    <i className="fa-solid fa-arrow-right text-gray-600 group-hover:scale-110 transition-transform"></i>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="w-full py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-black text-white text-center">
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

export default Services;
