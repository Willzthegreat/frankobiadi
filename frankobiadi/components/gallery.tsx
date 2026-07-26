// import React from 'react'
// import Image from "next/image"
// import A1 from "@/public/Az1.jpg"
// import A2 from "@/public/Az2.jpg"
// import A3 from "@/public/Az3.jpg"


// const Gallery = () => {
//   return (
//     <>
//       <div className="flex justify-around gap-2  mb-10">
//         <div className="w-120 border">
//           <Image src={A1} className='w-full' alt={'Gallery 1'}  />
//         </div>
//         <div className="w-120 border">
//           <Image src={A2} className='w-full' alt={'Gallery 2'}  />
//         </div>
//         <div className="w-120 border">
//           <Image src={A3} className='w-full' alt={'Gallery 3'}  />
//         </div>
//       </div>
//     </>
//   )
// }

// export default Gallery


import Image from "next/image";
import A1 from "@/public/Az1.jpg";
import A2 from "@/public/Az2.jpg";
import A3 from "@/public/Az3.jpg";

const Gallery = () => {
  const images = [
    { src: A1, alt: "Gallery 1" },
    { src: A2, alt: "Gallery 2" },
    { src: A3, alt: "Gallery 3" },
  ];

  return (
    <section className="mb-10 ">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
        {images.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden border lg:w-120 "
          >
            <Image
              src={image.src}
              alt={image.alt}
              className="h-64 w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;