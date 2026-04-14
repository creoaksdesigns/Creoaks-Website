import Hero from '../components/Hero';
import { motion } from "framer-motion";
import ScrollVelocity from '../components/ScrollVelocity';
import LogoLoop from '../components/LogoLoop';
import { useState, useEffect, useRef } from 'react';
import testimonials from '../data';
import { Link } from 'react-router-dom';


const Home = () => {

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };


  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <Hero />


      {/* ================= ABOUT SECTION ================= */}
      <section className="relative w-full h-auto bg-white overflow-hidden">

        {/* ================= BACKGROUND SCROLL TEXT ================= */}
        <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none opacity-10">

          {/* Rotate to make the text vertical */}
          <div className="rotate-90">
            <ScrollVelocity
              texts={['Creoaks']}
              velocity={-100} // Negative value makes it scroll upward
              className="whitespace-nowrap text-8xl lg:text-[150px] font-bold text-gray-900"
            />
          </div>

        </div>


        {/* ================= MAIN CONTENT ================= */}
        <div className="relative z-10">

          {/* Two-column layout on large screens */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">


            {/* ========== TEXT SECTION ========== */}
            <div className="p-8 lg:p-20 overflow-hidden">

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, margin: "-100px" }}
              >

                {/* Section Title */}
                <h2 className="text-2xl lg:text-5xl mb-6 lg:mb-10 font-semibold">
                  About Creoaks
                </h2>

                {/* First Paragraph */}
                <p className="mb-4 lg:mb-6 text-gray-500 leading-relaxed text-sm md:text-base">
                  Creoaks is your creative partner for brand design and print. We help businesses look professional and communicate clearly with logos, campaigns, and printed materials that make a strong first impression and keep attention.
                </p>

                {/* Second Paragraph */}
                <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                  We have worked with private companies and public institutions to deliver marketing materials and event branding that perform in the real world. Our process is collaborative and practical — clear briefs, thoughtful design, and on-time production.
                </p>

              </motion.div>
            </div>


            {/* ========== IMAGE SECTION ========== */}
            <div className="w-full h-full flex justify-center items-center p-6 lg:p-12">

              <div className="overflow-hidden rounded-2xl">

                <motion.img
                  src="/images/OfficeIMG.png"
                  alt="Creoaks Office"

                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: false, margin: "-100px" }}

                  className="h-screen w-auto md:h-auto md:w-96 object-cover rounded-2xl"
                />

              </div>
            </div>

          </div>
        </div>

      </section>

      {/* ================= CREATIVE IDEAS ================= */}
      <section className="w-full h-auto bg-black justify-center items-center mb-0 overflow-hidden">

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, margin: "-100px" }}
          className="text-gray-400 flex justify-center md:justify-end pt-10">
          <p className="">Professionals focused on helping your brand <br /> <span>grow and move foward</span></p>
          <div className="w-60 h-1 mt-2 ml-4 bg-gray-400 hidden md:flex" />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: false, margin: "-100px" }}
          className="flex flex-col lg:flex-row gap-10 justify-center items-center mt-16 mb-24">
          <img className="w-40 h-20 md:w-56 md:h-28 rounded-full object-cover" src="/images/IdeasIMG.jpeg" alt="Unique Ideas" />
          <div className="text-white text-4xl md:text-5xl lg:text-7xl text-center">
            <h1>Unique ideas</h1>
            <h1>For Your Business.</h1>
          </div>

          <Link to="/services"
            className="flex items-center gap-4 rounded-full py-3 px-6 bg-primary text-black hover:scale-105 transition-all duration-300"
          >
            <span className="text-sm font-medium">WHAT WE DO</span>
            <div className="bg-black p-3 rounded-full flex items-center justify-center">
              <i className="fa-solid fa-arrow-right text-primary"></i>
            </div>
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4  gap-0 justify-center items-center px-12 lg:px-20">
          <div className="group relative overflow-hidden w-full h-96 bg-transparent border-primary lg:border-gray-400/10 text-white flex flex-col p-10 lg:p-5 lg:hover:border-primary transition-all duration-500">
            {/* Animated top border */}
            <span className="absolute top-0 left-0 h-1 w-full bg-primary scale-x-100 lg:scale-x-0 origin-left transition-transform duration-500 lg:group-hover:scale-x-100"></span>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: false, margin: "-100px" }}
            >
              <p className="text-xl">Graphic <br /><span>Design</span></p>
              <p className="text-gray-400 my-16 lg:my-9 opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-500">We create outstanding logos, flyers, social media graphics for...</p>
              <Link to="/services" className="flex items-center rounded-full bg-primary w-12 h-12 p-4 lg:bg-gray-400 lg:w-5 lg:h-5 lg:p-1 text-black lg:group-hover:bg-primary lg:group-hover:w-12 lg:group-hover:h-12 lg:group-hover:p-4 transition-all duration-500">
                <i className="fa-solid fa-arrow-right text-base lg:text-xs lg:group-hover:text-base transition-all duration-500"></i>
              </Link>
            </motion.div>
          </div>

          <div className="group relative overflow-hidden w-full h-96 bg-transparent border-primary lg:border-gray-400/10 text-white flex flex-col p-10 lg:p-5 lg:hover:border-primary transition-all duration-500">
            {/* Animated top border */}
            <span className="absolute top-0 left-0 h-1 w-full bg-primary scale-x-100 lg:scale-x-0 origin-left transition-transform duration-500 lg:group-hover:scale-x-100"></span>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: false, margin: "-100px" }}
            >
              <p className="text-xl">Digital and <br /><span>Offset Printing</span></p>
              <p className="text-gray-400 my-16 lg:my-9 opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-500">From business cards, labels/stickers, custom leaflets to magazines...</p>
              <Link to="/services" className="flex items-center rounded-full bg-primary w-12 h-12 p-4 lg:bg-gray-400 lg:w-5 lg:h-5 lg:p-1 text-black lg:group-hover:bg-primary lg:group-hover:w-12 lg:group-hover:h-12 lg:group-hover:p-4 transition-all duration-500">
                <i className="fa-solid fa-arrow-right text-base lg:text-xs lg:group-hover:text-base transition-all duration-500"></i>
              </Link>
            </motion.div>
          </div>
          <div className="group relative overflow-hidden w-full h-96 bg-transparent border-primary lg:border-gray-400/10 text-white flex flex-col p-10 lg:p-5 lg:hover:border-primary transition-all duration-500">
            {/* Animated top border */}
            <span className="absolute top-0 left-0 h-1 w-full bg-primary scale-x-100 lg:scale-x-0 origin-left transition-transform duration-500 lg:group-hover:scale-x-100"></span>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: false, margin: "-100px" }}
            >
              <p className="text-xl">Large Format <br /><span>Printing</span></p>
              <p className="text-gray-400 my-16 lg:my-9 opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-500">We print event banners, signage, posters, wall and window graphics.</p>
              <Link to="/services" className="flex items-center rounded-full bg-primary w-12 h-12 p-4 lg:bg-gray-400 lg:w-5 lg:h-5 lg:p-1 text-black lg:group-hover:bg-primary lg:group-hover:w-12 lg:group-hover:h-12 lg:group-hover:p-4 transition-all duration-500">
                <i className="fa-solid fa-arrow-right text-base lg:text-xs lg:group-hover:text-base transition-all duration-500"></i>
              </Link>
            </motion.div>
          </div>
          <div className="group relative overflow-hidden w-full h-96 bg-transparent border-primary lg:border-gray-400/10 text-white flex flex-col p-10 lg:p-5 lg:hover:border-primary transition-all duration-500">
            {/* Animated top border */}
            <span className="absolute top-0 left-0 h-1 w-full bg-primary scale-x-100 lg:scale-x-0 origin-left transition-transform duration-500 lg:group-hover:scale-x-100"></span>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: false, margin: "-100px" }}
            >
              <p className="text-xl">Branding <br /><span>Consultation</span></p>
              <p className="text-gray-400 my-16 lg:my-9 opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-500">We guide you to build clear brand messages through visual identity...</p>
              <Link to="/services" className="flex items-center rounded-full bg-primary w-12 h-12 p-4 lg:bg-gray-400 lg:w-5 lg:h-5 lg:p-1 text-black lg:group-hover:bg-primary lg:group-hover:w-12 lg:group-hover:h-12 lg:group-hover:p-4 transition-all duration-500">
                <i className="fa-solid fa-arrow-right text-base lg:text-xs lg:group-hover:text-base transition-all duration-500"></i>
              </Link>
            </motion.div>
          </div>
        </div>

      </section>

      {/* ================= ABOUT DIRECTOR ================= */}
      <section className="relative w-full h-auto bg-white overflow-hidden">

        {/* ================= BACKGROUND SCROLL TEXT ================= */}
        <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none opacity-10">

          {/* Rotate to make the text vertical */}
          <div className="rotate-90">
            <ScrollVelocity
              texts={['Creoaks']}
              velocity={-100} // Negative value makes it scroll upward
              className="whitespace-nowrap text-8xl lg:text-[150px] font-bold text-gray-900"
            />
          </div>

        </div>


        {/* ================= MAIN CONTENT ================= */}
        <div className="relative z-10">

          {/* Two-column layout on large screens */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">


            {/* ========== TEXT SECTION ========== */}
            <div className="p-8 lg:p-20 overflow-hidden">

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, margin: "-100px" }}
              >
                {/* Section Title */}
                <h2 className="text-3xl lg:text-6xl mb-6 lg:mb-10 font-semibold lg:w-4">
                  Meet Our Creative Director
                </h2>

                {/* First Paragraph */}
                <p className="mb-4 lg:mb-6 text-gray-500 text-sm md:text-base leading-relaxed">
                  Kazeem Sanni, our Creative Director, brings 20+ years of experience in building
                  brands that standout and press-prefect print. He blends strategy with craft to turn business
                  goals into clear, compelling visuals.
                </p>

                {/* Second Paragraph */}
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                  Under Kazeem's leadership, Creoaks has executed campaigns and event branding for both
                  private and public organizations - keeping quality high, timlines tight, and results measureable.
                </p>

              </motion.div>
            </div>


            {/* ========== IMAGE SECTION ========== */}
            <div className="w-full h-full flex flex-col justify-center items-center p-6 lg:p-12">

              <div className="overflow-hidden rounded-2xl">

                <motion.img
                  src="/images/cdirIMG.jpeg"
                  alt="Creoaks Office"

                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: false, margin: "-100px" }}

                  className="h-96 w-auto md:h-auto md:w-96 object-cover rounded-2xl"
                />

              </div>

              <p className="text-4xl leading-relaxed mx-20 my-4 text-center lg:text-left">
                We deliver <br /><span>exceptional results.</span>
              </p>
            </div>
          </div>
        </div>

      </section>

      {/* ================= CLIENT FEEDBACK ================= */}
      <section className="relative w-full bg-gray-300 overflow-hidden">

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, margin: "-100px" }}
          className="text-gray-400 flex justify-center md:justify-end pt-10 px-6"
        >
          <p>
            What clients say about patronizing creoaks <br />
            <span>real projects, real results</span>
          </p>
          <div className="w-60 h-1 mt-2 ml-4 bg-gray-400 hidden md:flex" />
        </motion.div>

        <div className="p-8 lg:p-20">

          {/* TITLE */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="text-center mt-16 mb-16"
          >
            <h1 className="text-black text-4xl md:text-5xl lg:text-7xl">
              Client Testimonials <br />
              Real Stories, Real Results
            </h1>
          </motion.div>

          <div className="relative w-full max-w-4xl mx-auto flex items-center justify-center">

            {/* LEFT BUTTON */}
            <motion.button
              onClick={prev}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
              className="absolute left-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-400 flex items-center justify-center hover:bg-gray-500 transition z-20"
            >
              <i className="fa-solid fa-arrow-left text-gray-600"></i>
            </motion.button>

            {/* TEXT */}
            <motion.div
              key={`text-${index}`}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, info) => {
                const threshold = 60;
                if (info.offset.x < -threshold) next();
                else if (info.offset.x > threshold) prev();
              }}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
              className="text-center max-w-2xl px-12 cursor-grab active:cursor-grabbing"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                {testimonials[index].name}
              </h3>

              {testimonials[index].organization && (
                <p className="text-xs tracking-widest text-gray-500 uppercase mt-1">
                  {testimonials[index].organization}
                </p>
              )}

              <p className="text-xs tracking-widest text-gray-400 lowercase mt-1 mb-6">
                {testimonials[index].email}
              </p>

              <div className="text-orange-500 text-5xl leading-none mb-4">
                &#8221;
              </div>

              <p className="text-gray-800 text-sm md:text-lg leading-relaxed">
                {testimonials[index].text}
              </p>
            </motion.div>

            {/* RIGHT BUTTON */}
            <motion.button
              onClick={next}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
              className="absolute right-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-400 flex items-center justify-center hover:bg-gray-500 transition z-20"
            >
              <i className="fa-solid fa-arrow-right text-gray-600"></i>
            </motion.button>

          </div>
        </div>

      <LogoLoop />
      </section>
    </>
  );
};

export default Home;