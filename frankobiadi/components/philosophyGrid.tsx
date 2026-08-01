import React from "react";
import Image from "next/image";

import Frame from "@/public/Frame.png";
import Frame1 from "@/public/Frame1.png";
import Frame2 from "@/public/Frame2.png";
import Frame3 from "@/public/Frame3.png";
import Frame4 from "@/public/Frame4.png";
import Frame5 from "@/public/Frame5.png";


const philosophyItems = [
  {
    image: Frame,
    title: "Principle 1",
    description: "Description of Principle 1.",
  },
  {
    image: Frame1,
    title: "Principle 2",
    description: "Description of Principle 2.",
  },
  {
    image: Frame2,
    title: "Principle 3",
    description: "Description of Principle 3.",
  },
  {
    image: Frame3,
    title: "Principle 4",
    description: "Description of Principle 4.",
  },
  {
    image: Frame4,
    title: "Principle 5",
    description: "Description of Principle 5.",
  },
  {
    image: Frame5,
    title: "Principle 6",
    description: "Description of Principle 6.",
  },
];

const PhilosophyGrid = () => {
  return (
    <section className="w-full px-20 py-30">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-3">
        {philosophyItems.map((item) => (
          <div
            key={item.title}
            className="flex flex-col bg-gray-50 p-5 rounded-md overflow-hidden"
          >
            <div className="w-full">
              <Image
                src={item.image}
                alt={item.title}
                className="h-auto w-10 object-cover"
              />
            </div>

            <div className="pt-4">
              <h3 className="text-lg font-semibold">
                {item.title}
              </h3>

              <p className="mt-2 text-gray-600">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhilosophyGrid;