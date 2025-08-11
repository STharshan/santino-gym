import React from "react";

export function FindUs() {
  return (
    <section className="py-16 px-4 bg-black">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">Find Us</h2>

        <div className="rounded-lg overflow-hidden shadow-lg w-full h-[400px]">
          <iframe
            title="Google Map -Santino Gym, WGC5+CX Derby, United Kingdom"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.5421122308474!2d-1.5235899!3d52.4294968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48774be90e611ac3%3A0xa530e0456ad49de6!2sWGC5%2BCX%20Derby%2C%20United%20Kingdom!5e0!3m2!1sen!2suk!4v1691518585147!5m2!1sen!2suk"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0 w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
