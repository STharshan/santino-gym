import { Instagram } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 lg:px-15">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1: Brand */}
        <div>
          <img
            src="/image.png"
            alt="Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <h1 className="ml-2 text-xl font-bold text-white">
            Santino&apos;s
            <span className="text-sm font-normal text-gray-400 block">
              GYM & STUDIO
            </span>
          </h1>
          <p className="text-sm mt-2">
            Building strength, discipline, and community. Join our family and
            start your fitness journey today.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#home" className="hover:text-red-500 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-red-500 transition-colors">
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-red-500 transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#trainers"
                className="hover:text-red-500 transition-colors"
              >
                Trainers
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                className="hover:text-red-500 transition-colors"
              >
                Gallery
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Contact</h4>
          <p className="text-sm mb-2">Great Northern Rd, Derby, DE1 1LR</p>
          <p className="text-sm mb-2">
            Phone:{" "}
            <a href="tel:+447565603231" className="hover:text-red-500">
              +44 7565 603231
            </a>
          </p>
          <p className="text-sm mb-2">
            Email:{" "}
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${process.env.NEXT_PUBLIC_CONTACT_EMAIL}&su=Inquiry%20of%20Website`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500"
            >
              {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
            </a>
          </p>
          <p className="text-sm flex items-center gap-2">
            <Instagram className="w-4 h-4 text-white" />
            <a
              href={process.env.NEXT_PUBLIC_INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500"
            >
              @santinos_gym
            </a>
          </p>
        </div>
        <div>
          <h4 className="text-white text-lg font-semibold mb-3">Company Policy</h4>
          <ul className="list-none">
            <li>
              <Link href="/privacy-policy" className="hover:text-red-500">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms-and-conditions" className="hover:text-red-500">Terms & Conditions</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} Santino&apos;s Gym & Studio. All
          rights reserved.
        </p>
      </div>
      <div className=" mt-2 text-center text-sm">
        <p>
          Powered by{" "}
          <a
            href={process.env.NEXT_PUBLIC_POWERED_BY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:underline"
          >
            Ansely
          </a>
        </p>
      </div>
    </footer>
  );
}
