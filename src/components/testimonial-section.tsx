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
  {
    name: "Michael Fox",
    content: `This place was previously owned by a bodybuilder but unfortunately sold and moved on. Maybe wasn’t getting the support needed from the “True bodybuilders” the recent negative review was talking about since Will as taken over, he as made it a space that everyone is welcome, everyone is heard and everyone is considered apart of the family.`,
    date: "3 months ago",
  },
  {
    name: "Dennis Henshaw",
    content: `An old building on two floors. Upstairs is a large beamed, wooden floor area for dancing or karate and downstairs is set up with all heavy and varied gym equipment. The place is well equiped but the make over of the inside leaves a lot to be desired and needs attention on decor to bring it into the 21st century. You can buy body building supplements at the main desk in the foyer`,
    date: "7 years ago (edited)",
  },
  {
    name: "Ben",
    content: `Great proper old school gym. Staff are very friendly and welcoming would recommend if your in derby`,
    date: "3 months ago",
  },
  {
    name: "Sammi Joy",
    content: `Brilliant old school gym, has everything you could ever need. Well maintained and a great atmosphere`,
    date: "a years ago",
  },
  {
    name: "Hannah Jackson",
    content: `Absolutely amazing gym! Everyone in there is so supportive and encouraging! This gym as well as my personal trainer, Amber, are the reason for any improvement in my physical fitness! So tidy and clean also.`,
    date: "a years ago ",
  },
  {
    name: "Jason Holmes",
    content: `Amazing gym. Highly recommend to everyone!`,
    date: "3 months ago ",
  },
  {
    name: "Luke Bell",
    content: `Santinos is one of a kind. Many places say that they are like a family and fall flat of the statement. Santinos however certainly do have a family feel that makes you feel welcome the second you walk through the door. Owners Kim and Julie and the rest of the team are always happy to chat and offer friendly advice. Other gym users are both approachable and don't pry, they just get on with their workout. A step away from your average chain gym and a lovely environment to work out. The merch is also of good quality and reasonably priced.`,
    date: "3 years ago",
  },
  {
    name: "Chris Nicol",
    content: `In Derby for a couple weeks with work and found this little gem of a gym! Reasonably priced, not too busy and very clean! The gym staff are friendly and attentive, 100% recommend this place!`,
    date: "2 years ago",
  }, 
  {
    name: "Bruce Darcy",
    content: `Absolutely love this gym. I moved to Derby in early 2020, since training their Kim and Julie have become great friends and a great roll model too.
              Highly recommend this gym`,
    date: "3 years ago (edited)",
  }, 
  {
    name: "Matt Craven",
    content: `Amazing place to train. Lots of support from staff and members alike. Equipment is in top notch condition. Really good value for money with the support you receive. I highly recommend for beginners and professionals.`,
    date: "a years ago",
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
