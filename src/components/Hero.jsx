import { motion } from "framer-motion";
import HeroBg from "./HeroBg";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative w-full h-auto bg-black flex flex-col items-center pt-16 overflow-hidden"
    >

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <HeroBg
          hueShift={-135}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.5}
          scanlineFrequency={0}
          warpAmount={0}
          resolutionScale={1}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl w-full flex-1 flex flex-col py-10 md:py-0 md:justify-center md:items-center">

        <div className="overflow-hidden">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, margin: "-100px" }}
          >
            <h1 className="text-4xl mb-10 md:mb-0 md:text-5xl lg:text-7xl font-semibold leading-tight">
              Designs that Tell <br />
              <span>Your Story</span>
            </h1>

            <p className="mt-2 md:mt-4 text-gray-400 text-sm md:text-base leading-relaxed">
              Welcome to our world of creative design and professional printing.
              Together, we turn your big ideas into bold visuals and print branded
              materials that get you noticed.
            </p>
          </motion.div>
        </div>


        {/* Buttons */}
        <div className="mt-5 md:mt-10 flex flex-col mb-16 md:mb-24 md:flex-row gap-4 justify-center items-center">
          <div className="mt-6 md:mt-8 flex flex-col md:flex-row gap-4 justify-center items-center">

            <motion.div
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: false, margin: "-100px" }}
            >
              <Link
                to="/services"
                className="group flex items-center gap-4 rounded-full py-3 px-6 bg-primary text-black hover:scale-105 transition-all duration-300"
              >
                <span className="text-sm font-medium">WHAT WE DO</span>
                <div className="bg-black p-3 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <i className="fa-solid fa-arrow-right text-primary"></i>
                </div>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: false, margin: "-100px" }}
            >
              <Link
                to="/portfolio"
                className="group flex items-center gap-4 rounded-full py-3 px-6 text-white hover:scale-105 transition-all duration-300"
              >
                <span className="text-sm font-medium">VIEW WORKS</span>
                <div className="bg-gray-900 p-3 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <i className="fa-solid fa-arrow-right text-white"></i>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}