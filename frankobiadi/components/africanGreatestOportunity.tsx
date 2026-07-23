import Image from "next/image";
import Img from "@/public/Group 37.png";

const AfricanGreatestOpportunity = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-black px-6 py-12 text-center text-white sm:px-8 md:px-16 lg:px-24 xl:px-32">
      <h2 className="max-w-5xl text-lg font-medium leading-relaxed sm:text-xl md:text-2xl lg:text-2xl">
        I believe Africa's greatest opportunity is not hidden beneath its
        natural resources, but within its entrepreneurs. My life's work is
        dedicated to building the ventures, systems and institutions that
        enable them to create lasting prosperity.
      </h2>

      <Image
        src={Img}
        alt="Decorative graphic"
        className="mt-8 h-auto w-40 sm:w-48 md:w-56 lg:w-72 xl:w-80"
        priority
      />
    </section>
  );
};

export default AfricanGreatestOpportunity;