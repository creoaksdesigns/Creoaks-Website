import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const text = "Getting Your Brand Noticed".split(" ");

export default function Loader({ onFinish }) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timeline = [
      setTimeout(() => setStage(1), 2000), // text exit
      setTimeout(() => setStage(2), 3000), // bar animation
      setTimeout(() => setStage(3), 3800), // reveal text
      setTimeout(() => {
        setStage(4);
        onFinish();
      }, 6000),
    ];

    return () => timeline.forEach(clearTimeout);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {stage < 4 && (
        <motion.div
          className="fixed inset-0 bg-black z-[999] flex items-center justify-center overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* STAGE 1: TEXT */}
          
            {stage < 2 && (
              <motion.div
                key="stage1"
                className="flex flex-col items-center md:flex-row gap-3 text-white text-3xl md:text-5xl font-semibold"
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                {text.map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -80, opacity: 0 }}
                    transition={{
                      delay: i * 0.15,
                      duration: 0.6,
                      ease: "easeOut",
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.div>
            )}

          {stage >= 2 && (
            <AnimatePresence>
              <div className="relative flex items-center justify-center">

                {/* Container */}
                <div className="relative w-[300px] h-6">

                  {/* Domain Text (white) */}
                  <motion.span
                    className="absolute inset-0 flex items-center justify-center text-white text-xl md:text-3xl font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: stage >= 3 ? 1 : 0 }} // only show when shrinking starts
                    transition={{ duration: 0.2 }}
                  >
                    creoaks.com
                  </motion.span>

                  {/* BAR (acts as mask) */}
                  <motion.div
                    className="absolute inset-0 bg-primary h-10"

                    initial={{ scaleX: 0, originX: 0 }} // grow from left

                    animate={{
                      scaleX: stage === 2 ? 1 : 0, // full → then shrink
                      originX: stage === 2 ? 0 : 1, // switch pivot!
                    }}

                    transition={{
                      duration: 1,
                      ease: [0.77, 0, 0.175, 1],
                    }}
                  />
                </div>

              </div>
            </AnimatePresence>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}