"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function HeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-[calc(100vh-80px)] px-6 lg:px-12 overflow-hidden text-center"
      data-aos="fade-in"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/background-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl flex flex-col items-center justify-center text-center space-y-6">
        {/* Header Line */}
        <div
          className="flex items-center justify-center mb-4"
          data-aos="fade-down"
        >
          <div className="w-12 h-px bg-red-500 mr-4"></div>
          <p className="text-red-500 text-sm font-medium uppercase tracking-wider">
            KEEP YOUR BODY FIT WITH OUR WORKOUTS
          </p>
          <div className="w-12 h-px bg-red-500 ml-4"></div>
        </div>

        {/* Heading */}
        <h1
          className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight"
          data-aos="zoom-in"
        >
          YOUR FITNESS
          <br />
          YOUR VICTORY
        </h1>

        {/* Subtext */}
        <p
          className="text-gray-300 text-base sm:text-lg mb-4 max-w-2xl"
          data-aos="fade-up"
          data-aos-delay={200}
        >
          Ready to change your physique, but can’t find your gym?
        </p>

        {/* Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          data-aos="fade-up"
          data-aos-delay={400}
        >
          <a href="#services">
            <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-base font-medium">
              JOIN WITH US
            </Button>
          </a>
          <a href="#services">
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-base font-medium bg-transparent"
            >
              OUR SERVICES
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
