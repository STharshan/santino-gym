"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AOS from "aos";
import "aos/dist/aos.css";

export function ServicesSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false, // 👈 animation triggers every scroll
    });
  }, []);

  const memberships = [
    {
      title: "Standard Membership",
      price: "£26.00 Per Month",
      features: [
        "Free access fob once signed up",
        "Full Access To Facilities",
        "Minimum 3 Payments",
        "Access to all gym facilities (boxing academy is separate to the gym)",
        "3 months minimum term, 30 days notice to cancel after this term",
      ],
    },
    {
      title: "Student/NHS Membership",
      price: "£19.50 Per Month",
      features: [
        "Free access fob once signed up",
        "Access to all gym facilities (boxing academy is separate to the gym)",
        "3 months minimum term, 30 days notice to cancel after this term",
        "Student/NHS ID must be provided upon first visit",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 px-6 lg:px-12 bg-black" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-down">
          <div className="flex items-center justify-center mb-8">
            <div className="w-12 h-px bg-red-500 mr-4"></div>
            <p className="text-red-500 text-sm font-medium uppercase tracking-wider">
              Membership Options
            </p>
            <div className="w-12 h-px bg-red-500 ml-4"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            CHOOSE YOUR PLAN
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {memberships.map((membership, index) => (
            <Card
              key={index}
              className="bg-gray-900 border-gray-800 hover:border-red-500 transition-colors flex flex-col h-full"
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} // 👈 alternate animation
            >
              <CardContent className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-4">{membership.title}</h3>
                <div className="text-3xl font-bold text-red-500 mb-6">{membership.price}</div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {membership.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://secure.ashbournemanagement.co.uk/signupUK/index.aspx?fn=GRCF2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-red-500 hover:bg-red-600 text-white mt-auto">
                    Select
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
