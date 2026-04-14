import { motion } from "framer-motion";

const logos = [
  "/logos/creoaksLogoBlack.png",
  "/logos/creoaksLogoBlack2.png",
];

export default function LogoLoop() {
  return (
    <div className="relative w-full overflow-hidden py-8 mt-16">

      <motion.div
        className="flex gap-12"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 20, // control speed
          ease: "linear",
        }}
      >
        {/* Duplicate logos for seamless loop */}
        {[...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="logo"
            className="h-6 lg:h-10 w-auto object-contain"
          />
        ))}
      </motion.div>
    </div>
  );
}