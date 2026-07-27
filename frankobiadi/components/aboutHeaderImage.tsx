// import React from "react";
// import Image from "next/image";
// import A1 from "@/public/A1.jpg";
// import A2 from "@/public/A2.png";

// const AboutHeaderImage = () => {
//   return (
//     <section className="grid grid-cols-1 lg:grid-cols-[1fr_4fr] gap-8 px-6 lg:px-16 py-12">
//       {/* Left Column */}
//       <div className="flex items-start justify-center ">
//         <p className="text-2xl font-bold">1</p>
//       </div>

//       {/* Right Column */}
//       <div className="space-x-6 grid grid-cols-2">
//         {/* Top Image */}
//         <div className="bg-gray-200 border rounded-md">
//           <Image
//             src={A1}
//             alt="Business"
//             className="w-full h-auto rounded-lg object-cover"
//           />
//         </div>

//         {/* Bottom Section */}
//         <div className="grid grid-cols-1 items-center -mt-6">
//           <div className="border rounded-md ">
//             <Image
//               src={A2}
//               alt="Business Illustration"
//               className=" h-auto w-full rounded-lg"
//             />
//           </div>

//           <p className="text-lg leading-8 text-gray-700">
//             Business has never been just commerce to me. It is one of
//             humanity&apos;s most powerful tools for creating opportunity,
//             solving meaningful problems and shaping the future of societies.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutHeaderImage;















import React from "react";
import Image from "next/image";
import A1 from "@/public/A1.jpg";
import A2 from "@/public/A2.png";

const AboutHeaderImage = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1fr_4fr] gap-8 px-4 sm:px-6 lg:px-16 py-8 lg:py-12">
      {/* Left Column */}
      <div className="md:flex items-start justify-center hidden ">
        <p className="text-xl sm:text-2xl font-bold "></p>
      </div>

      {/* Right Column */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Top Image */}
        <div className="bg-gray-200 border rounded-md">
          <Image
            src={A1}
            alt="Business"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 items-center mt-0 md:-mt-6">
          <div className="border rounded-md">
            <Image
              src={A2}
              alt="Business Illustration"
              className="w-full h-auto rounded-lg"
            />
          </div>

          <p className="mt-4 md:mt-0 text-base sm:text-lg leading-7 text-center md:text-start sm:leading-8 text-gray-700">
            Business has never been just commerce to me. It is one of
            humanity&apos;s most powerful tools for creating opportunity,
            solving meaningful problems and shaping the future of societies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHeaderImage;