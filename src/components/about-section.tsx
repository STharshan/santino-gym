"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Dumbbell, Repeat, Sparkles, Flame } from "lucide-react";

export function AboutSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <section id="about" className="py-24 px-6 lg:px-12 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-20" data-aos="fade-down">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-px bg-red-500 mr-4"></div>
            <p className="text-red-500 text-sm font-semibold uppercase tracking-widest">
              About Santino’s Gym
            </p>
            <div className="w-12 h-px bg-red-500 ml-4"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            A Legacy of Strength Since 2016
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Founded by Kim Santino, one of Derby’s original old-school
            bodybuilders, Santino’s Gym is built on heritage, grit, and the
            pursuit of true strength.
          </p>
        </div>

        {/* First Row of Cards */}
        <div className="grid md:grid-cols-3 gap-8" data-aos="fade-up">
          <Card className="bg-black border border-gray-800 hover:border-red-500 transition-all duration-300 shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-6 text-red-500">
                <Trophy className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                A Champion’s Gym
              </h3>
              <p className="text-gray-400">
                With a career that spanned national and international
                competitions, Kim Santino built more than a gym — he built a
                place where dedication meets tradition.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-black border border-gray-800 hover:border-red-500 transition-all duration-300 shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-6 text-red-500">
                <Dumbbell className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Old School, Always
              </h3>
              <p className="text-gray-400">
                Santino’s stood out from the crowd with cast iron plates and
                classic equipment — staying true to the roots of real
                bodybuilding as trends came and went.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-black border border-gray-800 hover:border-red-500 transition-all duration-300 shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-6 text-red-500">
                <Repeat className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Passing the Baton
              </h3>
              <p className="text-gray-400">
                In 2023, Kim passed the torch to a new generation. Will and his
                team took over with respect for tradition — and a vision for
                growth.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Second Row of Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-14" data-aos="fade-up">
          <Card className="bg-black border border-gray-800 hover:border-red-500 transition-all duration-300 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-6 text-red-500">
                <Sparkles className="w-8 h-8 mr-2" />
                <h3 className="text-xl font-bold text-white">
                  A New Era Begins – October 2023
                </h3>
              </div>
              <p className="text-gray-400 mb-4">
                Led by Will and his team, the gym received:
              </p>
              <ul className="text-gray-300 list-disc list-inside space-y-1 text-left">
                <li>Fresh layout</li>
                <li>Upgraded lighting & fresh paint</li>
                <li>More hand-picked old school equipment</li>
                <li>Same old-school spirit</li>
              </ul>
            </CardContent>
          </Card>

          <Card
            className="bg-black border border-gray-800 hover:border-red-500 transition-all duration-300 shadow-lg"
            data-aos="fade-up"
          >
            <CardContent className="p-8">
              <div className="flex items-center mb-6 text-red-500">
                <Flame className="w-8 h-8 mr-2" />
                <h3 className="text-xl font-bold text-white">
                  Still Standing Strong
                </h3>
              </div>
              <p className="text-gray-400">
                Today, Santino’s remains one of Derby’s last true old-school
                gyms — committed to tradition, real results, and a community
                built on strength.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
