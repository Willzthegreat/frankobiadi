// import React from 'react'
// import AboutImage from "@/public/aboutImage.png"
// import Image from 'next/image'



// const AboutHeader = () => {
//   return (
//     <>
//       <div className="flex flex-[1fr_2fr] px-16 ">
//         <div>
//           <Image src={AboutImage} className='w-39 py-10' alt="About Image" />
//         </div>
//         <div>
//           <h1 className='text-9xl px-5 font-black'>Building Systems and Institutions That Will Outlive Me</h1>
//         </div>
//       </div>
//     </>
//   )
// }

// export default AboutHeader;










import React from "react";
import Image from "next/image";
import AboutImage from "@/public/aboutImage.png";

const AboutHeader = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1fr_4fr] text-center md:text-start items-center gap-8 px-6 lg:px-16 py-12">
      <div className="flex justify-center lg:justify-start">
        <Image
          src={AboutImage}
          alt="About"
          className="w-20 h-auto hidden md:block"
          priority
        />
      </div>

      <div>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-black leading-tight">
          Building Systems and Institutions That Will Outlive Me
        </h1>
      </div>
    </section>
  );
};

export default AboutHeader;