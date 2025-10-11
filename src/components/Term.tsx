"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TermsConditions: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false, // 👈 animation triggers every scroll
    });
  }, []);

  return (
    <section className="bg-black text-white mx-auto px-4 py-8" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold text-center mb-6 mt-20" data-aos="fade-down">
          Website Terms of Use
        </h1>
        <p className="text-center text-gray-200 mb-8" data-aos="fade-down">
          Last updated: 09/09/25
        </p>

        <div className="mt-8 space-y-6">
          {[
            {
              title: "1. Use of Our Website",
              content:
                "The content on this website is for general information only. You must not use this site for unlawful purposes or in any way that may damage our reputation or impair its availability.",
            },
            {
              title: "2. Accuracy of Information",
              content:
                "We make reasonable efforts to keep information on this website up to date, but we do not guarantee accuracy, completeness, or reliability. Any reliance on website content is at your own risk. For project details, quotes, or professional advice, please contact us directly.",
            },
            {
              title: "3. Intellectual Property",
              content:
                "All content on this website (including text, images, graphics, and logos) is owned by or licensed to Smashed Burgers & Shakes. You may view, download, and print content for personal use only. You must not copy, reproduce, or distribute our website content without prior written consent.",
            },
            {
              title: "4. Links to Other Websites",
              content:
                "This site may include links to external websites for convenience. We are not responsible for the content or practices of third-party websites.",
            },
            {
              title: "5. Liability",
              content:
                "We are not liable for any loss or damage arising from use of this website, except where required by law. Nothing in these terms excludes or limits liability for death or personal injury caused by negligence.",
            },
            {
              title: "6. Privacy & Data Protection",
              content:
                "Our use of your personal data is explained in our Privacy Policy, which forms part of these terms.",
            },
            {
              title: "7. Changes to These Terms",
              content:
                "We may update these terms from time to time. Please check this page periodically for the latest version.",
            },
            {
              title: "8. Governing Law",
              content:
                "These terms are governed by the laws of England and Wales. Any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales.",
            },
          ].map((section, idx) => (
            <section key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
              <h2 className="text-2xl font-medium">{section.title}</h2>
              <p className="text-white">{section.content}</p>
            </section>
          ))}

          <section data-aos="fade-up" data-aos-delay={900}>
            <h2 className="text-2xl font-medium">9. Contact Us</h2>
            <p className="text-white">
              If you have any questions about these Terms of Use, please contact us:
            </p>
            <div className="text-white">
              <p>
                <strong>Smashed Burgers & Shakes</strong>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:smashedashby@gmail.com"
                  className="text-yellow-500 hover:underline"
                >
                  smashedashby@gmail.com
                </a>
              </p>
              <p>Phone: 01530 648 708</p>
              <p>Address: 85a Market Street, Ashby LE65 1AH</p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default TermsConditions;
