"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const GDPRConsent: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [accepted, setAccepted] = useState<boolean | null>(null);
  const [showIcon, setShowIcon] = useState<boolean>(false);

  // 👇 Initialize AOS animation
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false, // 👈 ensures animation works every scroll
    });
  }, []);

  useEffect(() => {
    const consent = localStorage.getItem("gdprConsent");
    if (consent === "true" || consent === "false") {
      setAccepted(consent === "true");
      setShowIcon(true);
    } else {
      setVisible(true);
    }
  }, []);

  const handleAccept = (): void => {
    localStorage.setItem("gdprConsent", "true");
    setAccepted(true);
    setVisible(false);
    setShowIcon(true);
  };

  const handleReject = (): void => {
    localStorage.setItem("gdprConsent", "false");
    setAccepted(false);
    setVisible(false);
    setShowIcon(true);
  };

  const handleIconClick = (): void => {
    setVisible(true);
    setShowIcon(false);
  };

  return (
    <>
      {/* Cookie Banner */}
      {visible && (
        <div
          data-aos="fade-up" // 👈 animation added here
          className="fixed bottom-4 left-4 right-4 md:bottom-6 text-center md:right-6 md:left-auto 
                     max-w-full md:max-w-xs p-4 rounded-lg text-gray-900 shadow-lg z-50 
                     bg-gray-900 dark:text-gray-100 transition-colors"
        >
          <p className="text-sm mb-2 text-center text-white">
            We use cookies to improve your experience.
          </p>
          <p className="mb-3">
            <a
              href="/privacy-policy"
              className="underline text-red-500 hover:text-red-600 dark:text-red-500 dark:hover:text-[#007BC2]"
            >
              See our Privacy Policy
            </a>
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <button
              onClick={handleReject}
              className="bg-red-500 text-white px-4 py-2 rounded text-sm hover:bg-red-600
                         dark:hover:bg-red-600transition"
            >
              Reject
            </button>
            <button
              onClick={handleAccept}
              className="bg-gray-100 text-gray-900 px-4 py-2 rounded text-sm hover:bg-gray-200 
                         transition dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
            >
              Accept
            </button>
          </div>
        </div>
      )}

      {/* Cookie Icon */}
      {showIcon && !visible && (
        <div
          data-aos="zoom-in" // 👈 subtle animation for the icon
          className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40"
        >
          <button
            onClick={handleIconClick}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-500 shadow-lg border border-white 
                       flex items-center justify-center hover:scale-105 transition cursor-pointer
                       dark:border-gray-800"
            title="Cookie Preferences"
          >
            <img
              src="/revisit.svg"
              alt="Cookie Icon"
              className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
            />
          </button>
        </div>
      )}
    </>
  );
};

export default GDPRConsent;
