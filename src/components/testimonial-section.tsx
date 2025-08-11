"use client";

import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Daniel Hall",
    date: "3 years ago",
    content:
      " What an awesome place to train. Having previously been a member at The Gym and JD, Santino's is a breath of fresh air! Good selection of free weights and bars, lots of machines, some old, some new, all chosen because they work well. Kim and julie are also very friendly and welcoming. Proper gym",
    //     name: "Michael Fox",
    //     content: `Couldn’t recommend this gym enough. Will and the team will not only make you feel extremely welcome but will go above and beyond for your every need.

    // Since Will has taken over, he has made it a space that everyone is welcome, everyone is heard, and everyone is considered a part of the family.

    // If you’re looking for a gym with a variety of kit, helpful staff, and an amazing community—Sanctioned is the gym for you. Will, keep doing what you're doing man!`,
    //     date: "3 months ago",
  },
  {
    name: "Harry Pickard",
    content: `Out of all the bodybuilding gyms in Derby, not one can compete with the dedication and passion of the team behind Santino’s.

The place is a haven for old school bodybuilding equipment, and new kit is added frequently. The owner genuinely cares about the experience for everyone. I couldn’t recommend it enough!`,
    date: "3 months ago",
  },
  {
    name: "Rab",
    content: `Amber and Will are great personal trainers. Will is a very nice guy and I trust him implicitly as my trainer. The gym has all the free weights and equipment you could want.

It’s not overrun by kids or poseurs, and membership and PT costs are very reasonable. I wouldn’t go anywhere else.`,
    date: "3 months ago",
  },
  {
    name: "Jessica Kelly",
    content: `Great gym with a wide range of high-quality equipment. The gym is suitable for all gym goers, which I like. The owner, Will, is kind and lovely—couldn’t recommend it enough!`,
    date: "3 months ago",
  },
  {
    name: "Jut Terry",
    content: `The new venue for Santino’s gym is mind-blowing. It's by far the best gym in Derby. Staff are amazing, members are helpful, and if you're serious about body and mental self-confidence—this is the place!`,
    date: "3 years ago (edited)",
  },
];

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -350 : 350;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="testimonials" className="py-20 px-6 lg:px-12 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="w-12 h-px bg-red-500 mr-4"></div>
            <p className="text-red-500 text-sm font-medium uppercase tracking-wider">
              Testimonials
            </p>
            <div className="w-12 h-px bg-red-500 ml-4"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            What Our Members Say
          </h2>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full z-10"
          >
            <ChevronLeft size={24} />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide px-12"
          >
            {testimonials.map((t, index) => (
              <Card
                key={index}
                className="min-w-[320px] max-w-sm bg-gray-900 border-gray-800 hover:border-red-500 transition-colors"
              >
                <CardContent className="p-6 flex flex-col h-full">
                  {/* ⭐ Star Rating */}
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1"
                      />
                    ))}
                  </div>

                  <p className="text-gray-300 mb-4 flex-1 whitespace-pre-line">
                    {t.content}
                  </p>

                  <div className="mt-4 text-sm text-gray-400 font-medium">
                    — {t.name}, <span className="text-gray-500">{t.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full z-10"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
