import React from "react";
import Image from "next/image";

import pic1 from "@/public/p1.png";
import pic2 from "@/public/p2.png";
import pic3 from "@/public/p3.png";
import pic4 from "@/public/p4.png";
import pic5 from "@/public/p5.png";

const contactItems = [
  {
    image: pic1,
    title: "Keynote Speaking",
  },
  {
    image: pic2,
    title: "Board & Advisory Roles",
  },
  {
    image: pic3,
    title: "Strategic Partnerships",
  },
  {
    image: pic4,
    title: "Venture Collaboration",
  },
  {
    image: pic5,
    title: "Media Interviews",
  },
];

const ContactGrid = () => {
  return (
    <section className="w-full px-6 py-12 md:px-10 lg:px-16 lg:py-20">
      {/* Section Heading */}
      <div className="mb-10">
        <h2 className="text-3xl text-center md:text-start font-bold leading-tight md:text-4xl">
          Ways We Can Work Together
        </h2>
      </div>

      {/* Contact Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {contactItems.map((item) => (
          <div
            key={item.title}
            className="flex flex-col  items-center md:items-start gap-3 rounded-xl border border-gray-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            {/* Icon */}
            <div className="flex h-14 w-14 shrink-0 items-center justify-center">
              <Image
                src={item.image}
                alt={item.title}
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
            </div>

            {/* Title */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactGrid;

