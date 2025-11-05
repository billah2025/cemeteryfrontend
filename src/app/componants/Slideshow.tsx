"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = ["/image/siam.jpg","/image/siam.jpg", "/image/siam.jpg"];

const Slideshow = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  const goToNext = () => setCurrentImage((prev) => (prev + 1) % images.length);

  return (
    <div className="relative w-full h-64 sm:h-80 md:h-[28rem] overflow-hidden rounded-lg shadow-lg">
      {/* Image */}
      <div className="w-full h-full relative">
        <Image
          src={images[currentImage]}
          alt={`Slide ${currentImage}`}
          fill
          style={{ objectFit: 'cover' }}
          className="transition-all duration-700"
        />

        {/* Animated Text Overlay */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/30 px-4"
          >
            <h2 className="text-white text-2xl md:text-4xl font-bold drop-shadow-lg">
              Welcome to Jannatul Baqi Cemetery
            </h2>
            <p className="text-white/90 mt-2 text-sm md:text-lg drop-shadow-md">
              Remember and locate your loved ones with ease
            </p>
            <button className="mt-4 px-6 py-2 rounded-full bg-amber-400 text-green-900 font-semibold shadow-lg hover:bg-amber-300 transition">
              Learn More
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Left Button */}
      <button
        onClick={goToPrev}
        className="absolute top-1/2 left-3 transform -translate-y-1/2 text-3xl text-white bg-black/40 p-2 rounded-full hover:bg-black/60 transition"
        aria-label="Previous Slide"
      >
        ❮
      </button>

      {/* Right Button */}
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-3 transform -translate-y-1/2 text-3xl text-white bg-black/40 p-2 rounded-full hover:bg-black/60 transition"
        aria-label="Next Slide"
      >
        ❯
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-3 w-full flex justify-center space-x-2">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrentImage(i)}
            className={`cursor-pointer w-3 h-3 rounded-full ${currentImage === i ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;