import { useState } from "react";
import { motion } from "framer-motion";

import AdaptiveGrid from "./AdaptiveGrid";
import GalleryModal from "./GalleryModal";

const ProjectSection = ({ project }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.section
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-100px" }}
      className="mb-32 mx-4 my-4"
    >
      {/* TITLE */}
      <h2 className="text-sm uppercase tracking-[0.2em] mb-6 text-black font-medium text-center">
        {project.title}
      </h2>

      {/* GRID */}
      <div className="group overflow-hidden">
        <AdaptiveGrid
          images={project.images}
          watermarkText="CREOAKS DESIGN"
        />
      </div>

      {/* BUTTON */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => setOpen(true)}
          className="
            border border-black
            px-6 py-3
            rounded-full
            text-sm
            hover:bg-black
            hover:text-white
            transition-all
            duration-300
          "
        >
          Open Gallery
        </button>
      </div>

      {/* MODAL */}
      <GalleryModal
        open={open}
        setOpen={setOpen}
        images={project.images}
      />
    </motion.section>
  );
};

export default ProjectSection;