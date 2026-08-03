import React from "react";
import Image from "next/image";

import Frame from "@/public/hammer.png";
import Frame1 from "@/public/p3.png";
import Frame2 from "@/public/growth.png";
import Frame3 from "@/public/market.png";
import Frame4 from "@/public/investment.png";
import Frame5 from "@/public/executive.png";
import Frame6 from "@/public/mic.png";
import Frame7 from "@/public/bulb.png";

const letsBuildItems = [
  {
    image: Frame,
    title: "Venture Building",
  },
  {
    image: Frame1,
    title: "Strategic Partnerships",
  },
  {
    image: Frame2,
    title: "Business Growth Strategy",
  },
  {
    image: Frame3,
    title: "Market Expansion",
  },
  {
    image: Frame4,
    title: "Investment Readiness",
  },
  {
    image: Frame5,
    title: "Executive & Board Advisory",
  },
  {
    image: Frame6,
    title: "Keynote Speaking",
  },
  {
    image: Frame7,
    title: "Innovation & Ecosystem Development",
    wide: true,
  },
];

const LetsBuildGrid = () => {
  return (
    <section className="w-full px-7 py-16 lg:px-20 lg:py-24">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {letsBuildItems.map((item) => (
          <div
            key={item.title}
            className={`flex min-h-45 flex-col rounded-md bg-gray-50 p-6 ${
              item.wide ? "md:col-span-2 lg:col-span-2" : ""
            }`}
          >
            {/* Icon */}
            <div className="flex h-12 w-12 items-center">
              <Image
                src={item.image}
                alt={item.title}
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
            </div>

            {/* Title */}
            <div className="pt-6">
              <h3 className="text-lg font-semibold leading-6 text-gray-900">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LetsBuildGrid;

