
// import React from "react";
// import Image from "next/image";
// import ArticleImage from "@/public/article.png";
// import ArticleImage1 from "@/public/forex.jpg";
// import Image1 from "@/public/A1.jpg";
// import Image2 from "@/public/A2.png";
// import Image3 from "@/public/A3.png";

// const ArticlesInsights = () => {

//   const ImageArray = [Image1, Image2, Image3];

//   return (
//     <section className="w-full px-4 py-10 sm:px-6 lg:px-10">
//       {/* Heading */}
//       <div className="mb-10">
//         <Image
//           src={ArticleImage}
//           alt="Articles"
//           className="h-auto w-auto max-w-full"
//         />
//       </div>

//       {/* Featured Article */}
//       <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-center">
//         {/* Image */}
//         <div>
//           <Image
//             src={ArticleImage1}
//             alt="Article Image"
//             className="h-auto w-full rounded-lg object-cover"
//           />
//         </div>

//         {/* Content */}
//         <div className="space-y-5">
//           <div>
//             <h2 className="text-xl font-bold leading-snug sm:text-2xl lg:text-3xl">
//               Project Title: Subscriptionly App Design
//             </h2>

//             <p className="mt-2 text-sm text-gray-500 sm:text-base">
//               Article • July 15, 2021
//             </p>
//           </div>

//           <p className="text-sm leading-7 text-gray-700 sm:text-base">
//             I am a self-taught designer focused on solving problems by creating
//             meaningful experiences through design and development. I use logical
//             thinking and principles to combine shapes, colors, text, and images
//             into digital experiences.
//           </p>

//           <button className="flex items-center gap-2 font-semibold transition hover:text-green-600">
//             VIEW CASE STUDY
//             <i className="bx bxs-right-arrow-square text-xl"></i>
//           </button>
//         </div>
//       </div>

//       {/* Other Articles */}
//       <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//         {ImageArray.map((item) => (
//           <div
//             key={item}
//             className="overflow-hidden rounded-lg shadow-md transition hover:shadow-xl"
//           >
//             <Image
//               src={ImageArray}
//               alt="Article"
//               className="h-60 w-full object-cover"
//             />

//             <div className="p-5">
//               <h3 className="text-lg font-semibold">
//                 Forex Trading Strategies
//               </h3>

//               <p className="mt-2 text-sm text-gray-500">
//                 July 15, 2021
//               </p>

//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ArticlesInsights;











import React from "react";
import Image from "next/image";

import ArticleImage from "@/public/article.png";
import FeaturedImage from "@/public/forex.jpg";

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

const ArticlesInsights = () => {
  return (
    <section className="w-full px-4 py-10 sm:px-6 lg:px-10">
      {/* Heading */}
      <div className="mb-10">
        <Image
          src={ArticleImage}
          alt="Articles & Insights"
          className="h-auto w-auto max-w-full"
          priority
        />
      </div>

      {/* Featured Article */}
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Featured Image */}
        <div className="overflow-hidden rounded-xl">
          <Image
            src={FeaturedImage}
            alt="Featured Article"
            className="h-full w-full rounded-xl object-cover transition duration-500 hover:scale-105"
          />
        </div>

        {/* Featured Content */}
        <div className="space-y-5">
          <div>
            <h2 className="text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
              Project Title: Subscriptionly App Design
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Article • July 15, 2021
            </p>
          </div>

          <p className="leading-8 text-gray-600">
            I am a self-taught designer focused on solving problems by creating
            meaningful experiences through design and development. I use logical
            thinking and design principles to combine typography, colors,
            layouts, and interactions into engaging digital experiences that
            delight users.
          </p>

          <button className="flex items-center gap-2 font-semibold text-black transition hover:text-green-600">
            VIEW CASE STUDY
            <i className="bx bx-right-arrow-alt text-xl"></i>
          </button>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
        {articles.map((article) => (
          <article
            key={article.id}
            className="overflow-hidden transition duration-300 hover:-translate-y-2"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                className="h-60 w-full object-cover rounded-md hover:cursor-point bg-gray-100 transition duration-500 hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="space-y-4 p-6">
              <div>
                <h3 className="text-xl font-semibold">
                  {article.title}
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  {article.date}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ArticlesInsights;