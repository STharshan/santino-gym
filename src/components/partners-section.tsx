"use client";

import { Card, CardContent } from "@/components/ui/card";

const partners = [
  {
    name: "Smalls Kitchen",
    instagram: "smalls_kitchen2020",
    logo: "/partners/smalls_kitchen_logo.jpeg",
    trainerImage: "/partners/small.jpg",  // Trainer image
  },
  {
    name: "Tiago Tattoos",
    instagram: "Tiago_tattoos",
    logo: "/partners/tiago_logo.jpeg",
    trainerImage: "/partners/tatto.jpg",  // Trainer image
  },
  {
    name: "Boxing - Coach BoxClever",
    instagram: "coachboxclever77",
    logo: "/partners/boxclever_logo.jpeg",
    trainerImage: "/partners/boxing.jpg",  // Trainer image
  },
  {
    name: "Boxing - Coach BoxClever",
    instagram: "alg_boxing",
    logo: "/partners/boxclever_logo.jpeg",
    trainerImage: "/partners/box.jpg",  // Trainer image
  },
];

export function PartnerSection() {
  return (
    <section id="partners" className="mt-20 px-6 lg:px-12 bg-black text-white">
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

        {/* Partner Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16 text-center">
          {partners.map((partner, index) => (
            <Card
              key={index}
              className="bg-black border-gray-800 hover:border-red-500 transition-colors w-full rounded-lg shadow-lg overflow-hidden"
            >
              {/* Trainer Image */}
              <div className="w-[62%] sm:w-[80%] ml-20 sm:ml-8 h-95 md:h-70 relative">
                <img
                  src={partner.trainerImage}
                  alt={`${partner.name} trainer`}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>

              {/* Partner Logo */}
              <div className="w-[90%] ml-5 h-40 flex justify-center items-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  width={200}
                  height={160}
                  className="w-full h-40 object-contain p-4"
                />
              </div>

              {/* Partner Name and Instagram */}
              <CardContent className="text-center">
                <p className="font-medium text-gray-200">{partner.name}</p>
                <p className="text-gray-300 mt-2">
                  <a
                    href={`https://www.instagram.com/${partner.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300"
                  >
                    @{partner.instagram}
                  </a>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
