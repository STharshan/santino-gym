import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function ApparelsSection() {
  const products = [
    {
      name: "Santino's Training Shirt",
      price: "$29.99",
      image:
        "https://images.pexels.com/photos/6339331/pexels-photo-6339331.jpeg",
    },
    {
      name: "Performance Shorts",
      price: "$24.99",
      image:
        "https://images.pexels.com/photos/6076017/pexels-photo-6076017.jpeg",
    },
    {
      name: "Gym Hoodie",
      price: "$49.99",
      image:
        "https://images.pexels.com/photos/6739931/pexels-photo-6739931.jpeg",
    },
    {
      name: "Water Bottle",
      price: "$19.99",
      image:
        "https://images.pexels.com/photos/6283505/pexels-photo-6283505.jpeg",
    },
  ];

  return (
    <section id="apparels" className="py-20 px-6 lg:px-12 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="w-12 h-px bg-red-500 mr-4"></div>
            <p className="text-red-500 text-sm font-medium uppercase tracking-wider">
              SHOP NOW
            </p>
            <div className="w-12 h-px bg-red-500 ml-4"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            GYM APPARELS
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="bg-black border-gray-800 overflow-hidden group hover:border-red-500 transition-colors"
            >
              <div className="aspect-square overflow-hidden group">
                <Image
                  src="/image.png"
                  alt={product.name}
                  width={100}
                  height={50}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">
                  Coming Soon
                </h3>
                <p className="text-red-500 font-bold text-xl mb-4">£xx.xx</p>
                <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
                  Find in House
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
