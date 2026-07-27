import React from "react";
import Image, { StaticImageData } from "next/image";

import ArticleImage from "@/public/article.png";
import FeaturedImage from "@/public/forex.jpg";



type ArticlesInsightsProps = {
  myImage?: StaticImageData;
  myArticleImage?: StaticImageData;
  viewButton: React.ReactNode;
  title?: React.ReactNode;
  headText?: React.ReactNode;
  infoText?: React.ReactNode;
  titleClassName: string;
  headTextClassName: string;
  infoTextClassName: string;
  imageClassName: string;
  viewButtonClassName: string;
};


const ArticlesInsights = ({
  myImage = FeaturedImage,
  myArticleImage = ArticleImage,
  imageClassName = "",
  viewButton,
  viewButtonClassName,
  title,
  headText,
  infoText,
  titleClassName,
  headTextClassName,
  infoTextClassName,
}: ArticlesInsightsProps) => {
  return (
    <section className="w-full px-4 py-10 font-font-calibri sm:px-6 lg:px-10">
      {/* Section Heading */}
      <div className={` ${imageClassName}`}>
        <Image
          src={myArticleImage}
          alt="Articles & Insights"
          priority
          className="h-auto w-auto max-w-full"
        />
        
      </div>

      {/* Featured Article */}
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Image */}
        <div className="overflow-hidden rounded-xl">
          <Image
            src={myImage}
            alt="Featured Article"
            className="h-full w-full rounded-xl object-cover transition duration-500 hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="space-y-5 text-center lg:text-left">
          <div>
            <h2 className={`${titleClassName}`}>
              {title ?? "Project Title: Subscriptionly App Design"}
            </h2>

            <p className={`${headTextClassName}`}>
              {headText ?? "Article • July 15, 2021"}
            </p>
          </div>
          

          <p className={`${infoTextClassName}`}>
            {infoText ??
              "I am a self-taught designer focused on solving problems by creating meaningful experiences through design and development. I combine logical thinking, typography, colour, layout, and interaction design to build digital experiences that delight users and solve real business problems."}
          </p>

          <div>
            {viewButton}
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default ArticlesInsights;