"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function FindUs() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false, // 👈 animation triggers every scroll
    });
  }, []);

  return (
    <section
      data-aos="fade-up" // 👈 animation applied here
      className="py-16 px-4 bg-black"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">Find Us</h2>

        <div
          data-aos="zoom-in" // 👈 smooth zoom animation for the map
          className="rounded-lg overflow-hidden shadow-lg w-full h-[400px]"
        >
          <iframe
            title="Google Map - Santino Gym"
            src={process.env.NEXT_PUBLIC_GOOGLE_MAP_URL}
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0 w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
