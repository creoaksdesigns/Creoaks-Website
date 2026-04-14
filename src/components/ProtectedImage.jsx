import { motion } from "framer-motion";

/**
 * ProtectedImage Component
 * 
 * A reusable image component designed for design portfolios.
 * Prevents right-click (via overlay), dragging, and text selection.
 * Includes a responsive watermark and Framer Motion reveal effects.
 * 
 * @param {string} src - Image source URL
 * @param {string} alt - Alt text for accessibility
 * @param {string} className - Additional CSS classes for the container
 * @param {string} watermarkText - Text to display as a watermark
 * @param {string} watermarkPosition - "bottom-right" | "bottom-left" | "top-right" | "top-left" | "center"
 */
const ProtectedImage = ({ 
  src, 
  alt = "Creoaks Protected Work", 
  className = "", 
  watermarkText = "CREOAKS DESIGN",
  watermarkPosition = "bottom-right",
  loading = "lazy",
  decoding = "async",
  fetchpriority = "auto"
}) => {
  
  const getWatermarkPosition = () => {
    switch (watermarkPosition) {
      case "bottom-left": return "bottom-4 left-4";
      case "top-right": return "top-4 right-4";
      case "top-left": return "top-4 left-4";
      case "center": return "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2";
      case "bottom-right":
      default: return "bottom-4 right-4";
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, margin: "-50px" }}
      className={`relative overflow-hidden no-select no-drag group ${className}`}
    >
      {/* The Actual Image */}
      <img 
        src={src} 
        alt={alt}
        draggable="false"
        loading={loading}
        decoding={decoding}
        fetchpriority={fetchpriority}
        className="w-full h-full object-cover no-drag transition-transform duration-700 group-hover:scale-105"
      />

      {/* Transparent Protection Overlay */}
      {/* This invisible layer sits on top of the image to handle right-clicks and block direct image interaction */}
      <div 
        className="absolute inset-0 z-10 cursor-default"
        onContextMenu={(e) => e.preventDefault()}
      />

      {/* Watermark */}
      {watermarkText && (
        <div className={`absolute z-20 pointer-events-none select-none ${getWatermarkPosition()}`}>
          <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-white/40 uppercase bg-black/5 px-2 py-1 rounded backdrop-blur-[2px]">
            {watermarkText}
          </span>
        </div>
      )}

      {/* Hover Overlay Effect (Optional - adds a premium feel) */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 z-0 pointer-events-none" />
    </motion.div>
  );
};

export default ProtectedImage;
