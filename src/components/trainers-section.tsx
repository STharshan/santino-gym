"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

export function TrainersSection() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  const gaffer = {
    name: "Will",
    role: "Owner and Personal Trainer",
    instagram: "wjs_coach_me",
    image: "/trainers/t4.jpeg",
  };

  const personalTrainers = [
    {
      name: "Razzo",
      role: "Personal Trainer",
      instagram: "will.razzo",
      image: "/trainers/t5.jpeg",
    },
    {
      name: "Amber",
      role: "Personal Trainer",
      instagram: "coachingwithamberpt",
      image: "/trainers/t6.jpeg",
    },
    {
      name: "Hannah",
      role: "Personal Trainer",
      instagram: "_hannah.pt",
      image: "/trainers/t1.jpeg",
    },
    {
      name: "Sam",
      role: "Personal Trainer",
      instagram: "Balance__fitness__",
      image: "/trainers/t2.jpeg",
    },
    {
      name: "Sue",
      role: "Personal Trainer",
      instagram: "",
      image: "/trainers/t3.jpeg",
    },
  ];

  return (
    <section
      id="trainers"
      className="py-12 px-6 lg:px-12 bg-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-px bg-red-500 mr-4"></div>
            <p className="text-red-500 text-sm font-medium uppercase tracking-wider">
              MEET OUR TEAM
            </p>
            <div className="w-12 h-px bg-red-500 ml-4"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">
            Personal Trainers and House Partners.
          </h2>
        </div>

        {/* Gaffer */}
        <div className="mb-12 text-center">
          <Card className="group mx-auto max-w-sm bg-black border-gray-800 hover:border-red-500 transition-all duration-300">
            <div className="relative w-full h-80 overflow-hidden">
              <img
                src={gaffer.image}
                alt={gaffer.name}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl text-gray-300 mb-1">{gaffer.name}</h3>
              <p className="text-red-500 font-medium">{gaffer.role}</p>
              <p className="text-gray-200">
                <a
                  href={`https://www.instagram.com/${gaffer.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200"
                >
                  @{gaffer.instagram}
                </a>
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Personal Trainers */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-6">Personal Trainers</h3>
          <div className="relative">
            {/* Arrows */}
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black p-2 rounded-full border border-gray-700 hover:border-red-500"
            >
              <ChevronLeft className="text-white w-6 h-6" />
            </button>
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black p-2 rounded-full border border-gray-700 hover:border-red-500"
            >
              <ChevronRight className="text-white w-6 h-6" />
            </button>

            {/* Scrollable container */}
            <div
              ref={scrollRef}
              className="flex overflow-x-auto gap-6 px-8 scrollbar-hide scroll-smooth"
            >
              {personalTrainers.map((pt, index) => (
                <Card
                  key={index}
                  className="group min-w-[240px] bg-black border-gray-800 hover:border-red-500 transition-colors flex-shrink-0"
                >
                  <div className="relative w-full h-64 overflow-hidden">
                    <img
                      src={pt.image}
                      alt={pt.name}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4 text-center">
                    <h4 className="text-lg text-gray-300">{pt.name}</h4>
                    <p className="text-red-500">{pt.role}</p>
                    {pt.instagram && (
                      <p className="text-gray-200">
                        <a
                          href={`https://www.instagram.com/${pt.instagram}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-200"
                        >
                          @{pt.instagram}
                        </a>
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
