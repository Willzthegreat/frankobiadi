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
    title: "Build Value Before Valuation",
    description: "The strongest businesses solve meaningful problems before they seek investment. Capital should accelerate value—not replace it.",
  },
  {
    image: Frame1,
    title: "Think Beyond the Present",
    description: "Great companies are built with patience, discipline and a long-term commitment to excellence.",
  },
  {
    image: Frame2,
    title: "Partnerships Create Scale",
    description: "Transformational growth happens through collaboration. Strong partnerships create opportunities that no organization can achieve alone.",
  },
  {
    image: Frame3,
    title: "Innovation Must Solve Real Problems",
    description: "Technology should simplify complexity, strengthen businesses and improve lives.",
  },
  {
    image: Frame4,
    title: "Leadership Is Measured by Impact",
    description: "Leadership is not defined by titles, but by the opportunities created, the people empowered and the positive change left behind.",
  },
  {
    image: Frame5,
    title: "Build Beyond Yourself",
    description: "True success is measured by what endures. My ambition is to build ventures, institutions and ecosystems that continue creating opportunity long after I'm gone.",
  },
];

const PhilosophyGrid = () => {
  return (
    <section className="w-full px-7 lg:px-20 py-30">
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