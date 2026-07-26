import React from "react";
import Image, { StaticImageData } from "next/image";
import Img from "@/public/Group 37.png";

type AfricanGreatestOpportunityProps = {
  image?: StaticImageData;
  text?: React.ReactNode;
  ptext?: React.ReactNode;
  showImage?: boolean;

  className?: string;
  headingClassName?: string;
  imageClassName?: string;
  paragraphClassName?: string;
};

const AfricanGreatestOpportunity = ({
  image = Img,
  text,
  ptext,
  showImage = true,
  className = "",
  headingClassName = "",
  imageClassName = "",
  paragraphClassName = "",
}: AfricanGreatestOpportunityProps) => {
  return (
    <section
      className={`w-full bg-black text-white ${className}`}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-12 text-center sm:px-8 md:px-16 lg:px-24 xl:px-32">
        {text && (
          <h2
            className={`max-w-5xl  font-bold leading-tight ${headingClassName}`}
          >
            {text}
          </h2>
        )}

        {showImage && image && (
          <div className={imageClassName}>
            <Image
              src={image}
              alt="Decorative graphic"
              priority
              className="h-auto w-full"
            />
          </div>
        )}

        {ptext && (
          <p
            className={`max-w-3xl text-base leading-8 text-gray-300 ${paragraphClassName}`}
          >
            {ptext}
          </p>
        )}
      </div>
    </section>
  );
};

export default AfricanGreatestOpportunity;














// import React from "react";
// import Image, { StaticImageData } from "next/image";
// import Img from "@/public/Group 37.png";

// type AfricanGreatestOpportunityProps = {
//   image?: StaticImageData;
//   text?: React.ReactNode;
//   ptext?: React.ReactNode;
//   showImage?: boolean;

//   className?: string;
//   headingClassName?: string;
//   imageWrapperClassName?: string;
//   imageClassName?: string;
//   paragraphClassName?: string;
// };

// const AfricanGreatestOpportunity = ({
//   image = Img,
//   text,
//   ptext,
//   showImage = true,
//   className = "",
//   headingClassName = "",
//   imageWrapperClassName = "",
//   imageClassName = "",
//   paragraphClassName = "",
// }: AfricanGreatestOpportunityProps) => {
//   return (
//     <section
//       className={`w-full bg-black px-6 py-12 text-center text-white sm:px-8 md:px-16 lg:px-24 xl:px-32 ${className}`}
//     >
//       <div className="mx-auto flex max-w-6xl flex-col items-center">
//         {text && (
//           <h2
//             className={`max-w-5xl text-3xl font-bold leading-tight md:text-5xl ${headingClassName}`}
//           >
//             {text}
//           </h2>
//         )}

//         {showImage && (
//           <div className={imageWrapperClassName}>
//             <Image
//               src={image}
//               alt="Decorative graphic"
//               priority
//               className={`h-auto ${imageClassName}`}
//             />
//           </div>
//         )}

//         {ptext && (
//           <p
//             className={`max-w-xl text-base leading-8 text-gray-300 ${paragraphClassName}`}
//           >
//             {ptext}
//           </p>
//         )}
//       </div>
//     </section>
//   );
// };

// export default AfricanGreatestOpportunity;