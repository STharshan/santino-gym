import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-[calc(100vh-80px)] px-6 lg:px-12 overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/background-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay to reduce brightness */}
        <div className="absolute inset-0 bg-black opacity-70"></div> {/* Adjust opacity value as needed */}
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl text-center lg:text-left">
        <div className="flex items-center justify-center px-8 lg:justify-start mb-8">
          <div className="w-12 h-px bg-red-500 mr-4"></div>
          <p className="text-red-500 text-sm font-medium uppercase tracking-wider">
            KEEP YOUR BODY FIT WITH OUR WORKOUTS
          </p>
          <div className="w-12 h-px bg-red-500 ml-4"></div>
        </div>

        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          YOUR FITNESS
          <br />
          YOUR VICTORY
        </h1>

        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto lg:mx-0">
          Ready To Change Your Physique, But Can’t Work Out In The Gym? changer this to: Ready to change your physique, but can’t find your gym?
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-base font-medium">
            JOIN WITH US
          </Button>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-base font-medium bg-transparent"
          >
            OUR SERVICES
          </Button>
        </div>
      </div>
    </section>
  );
}
