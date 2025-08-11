"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const partners = [
  {
    name: "Smalls Kitchen",
    instagram: "smalls_kitchen2020",
    logo: "/partners/smalls_kitchen_logo.jpeg",
  },
  {
    name: "Tiago Tattoos",
    instagram: "Tiago_tattoos",
    logo: "/partners/tiago_logo.jpeg",
  },
  {
    name: "Boxing - Coach BoxClever",
    instagram: "coachboxclever77, alg_boxing",
    logo: "/partners/boxclever_logo.jpeg",
  },
];

export function PartnerSection() {
  return (
    <section id="partners" className="py-20 px-6 lg:px-12 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="w-12 h-px bg-red-500 mr-4"></div>
            <p className="text-red-500 text-sm font-medium uppercase tracking-wider">
              OUR PARTNERS
            </p>
            <div className="w-12 h-px bg-red-500 ml-4"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            In-House Partners
          </h2>
        </div>

        {/* Gaffer */}
        <div className="flex justify-center flex-wrap gap-3 mb-16 text-center">
          {partners.map((partner, index) => (
            <Card
              key={index}
              className="bg-black border-gray-800 hover:border-red-500 transition-colors w-72"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={200}
                height={160}
                className="w-full h-40 object-contain p-4"
              />

              <CardContent className="text-center pb-4">
                <p className="font-medium text-gray-200">{partner.name}</p>
                <p className="text-gray-400 text-sm">@{partner.instagram}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
