import React from "react";
import Image, { StaticImageData } from "next/image";

import Image1 from "@/public/A1.jpg";
import Image2 from "@/public/A2.png";
import Image3 from "@/public/A3.png";


const articles = [
  {
    id: 1,
    image: Image1,
    title: "Forex Trading Strategies",
    date: "July 15, 2021",
    description:
      "Learn proven trading strategies that help traders identify high-probability opportunities while managing risk effectively.",
  },
  {
    id: 2,
    image: Image2,
    title: "Understanding Market Structure",
    date: "July 20, 2021",
    description:
      "Master higher highs, lower lows, trend reversals, and how market structure influences your trading decisions.",
  },
  {
    id: 3,
    image: Image3,
    title: "Risk Management Techniques",
    date: "July 25, 2021",
    description:
      "Discover practical methods for protecting your trading capital and maintaining long-term profitability.",
  },
];

const ArticlesFeatures = () => {
  return (
    <section className="w-full px-4 py-10 font-font-calibri sm:px-6 lg:px-10">
      {/* Articles */}
      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
        {articles.map((article) => (
          <article
            key={article.id}
            className="overflow-hidden transition duration-300 hover:-translate-y-2"
          >
            <div className="overflow-hidden rounded-lg">
              <Image
                src={article.image}
                alt={article.title}
                className="h-60 w-full cursor-pointer rounded-lg object-cover transition duration-500 hover:scale-110"
              />
            </div>
            <div className="space-y-3 pt-5">
              <h3 className="text-xl font-semibold">{article.title}</h3>
              <p className="text-sm text-gray-500">{article.date}</p>
              <p className="leading-7 text-gray-600">
                {article.description}
              </p>
              <button className="font-medium text-green-600 hover:underline">
                Read More →
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ArticlesFeatures;