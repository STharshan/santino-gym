"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function GallerySection() {
  const galleryImages = Array.from(
    { length: 22 },
    (_, i) => `/gallery/${i + 1}.jpeg`
  );
  const IMAGES_PER_PAGE = 6;
  const [startIndex, setStartIndex] = useState(0);

  const handleScroll = (direction: "left" | "right") => {
    const nextIndex =
      direction === "left"
        ? Math.max(startIndex - IMAGES_PER_PAGE, 0)
        : Math.min(
            startIndex + IMAGES_PER_PAGE,
            galleryImages.length - IMAGES_PER_PAGE
          );
    setStartIndex(nextIndex);
  };

  const currentImages = galleryImages.slice(
    startIndex,
    startIndex + IMAGES_PER_PAGE
  );

  return (
    <section id="gallery" className="py-20 px-6 lg:px-12 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="w-12 h-px bg-red-500 mr-4"></div>
            <p className="text-red-500 text-sm font-medium uppercase tracking-wider">
              OUR FACILITY
            </p>
            <div className="w-12 h-px bg-red-500 ml-4"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            GALLERY
          </h2>
        </div>

        {/* Arrows */}
        <div className="flex items-center justify-center gap-6 pb-3">
          <button
            onClick={() => handleScroll("left")}
            disabled={startIndex === 0}
            className="p-2 bg-gray-800 rounded-full hover:bg-red-500 transition disabled:opacity-50"
          >
            <ChevronLeft className="text-white" />
          </button>
          <button
            onClick={() => handleScroll("right")}
            disabled={startIndex + IMAGES_PER_PAGE >= galleryImages.length}
            className="p-2 bg-gray-800 rounded-full hover:bg-red-500 transition disabled:opacity-50"
          >
            <ChevronRight className="text-white" />
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentImages.map((image, index) => (
            <div
              key={index}
              className="relative h-64 bg-white flex items-center justify-center rounded-lg overflow-hidden group cursor-pointer border-2 border-transparent hover:border-red-500 transition-all duration-300"
            >
              <img
                src={image}
                alt={`Gallery image ${startIndex + index + 1}`}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
