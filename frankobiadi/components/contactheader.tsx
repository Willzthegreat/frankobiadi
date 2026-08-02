
import React from "react";
import Image from "next/image";
import LetsBuildTogether from "./letsBuildTogether";
import frankobiadi from "@/public/franks_pics.jpeg";

const Contactheader = () => {
  return (
    <section className="w-full pl-6 pr-6 md:pr-0 pb-12 md:pl-10 lg:pl-16 lg:pb-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 md:grid-cols-2 lg:gap-16">
        {/* Left Content */}
        <div className="flex flex-col gap-10">
          {/* Introduction */}
          <div>
            <h2 className="text-3xl font-black leading-tight md:text-4xl lg:text-6xl">
              Let's Build Something Meaningful
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-gray-600 md:text-lg">
              Whether you're building a venture, seeking strategic
              partnerships, exploring investment opportunities or advancing
              innovation across Africa, I'd welcome the opportunity to
              connect.
            </p>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col gap-5">
            <div>
              <h2 className="text-2xl font-semibold md:text-3xl">
                Get In Touch
              </h2>

              <div className="mt-3 space-y-1 text-base text-gray-600 md:text-lg">
                <p>
                  <span className="font-medium text-gray-900">
                    Email:
                  </span>{" "}
                  Hello@frankobiadi.com
                </p>

                <p>
                  <span className="font-medium text-gray-900">
                    Location:
                  </span>{" "}
                  Lagos, Nigeria • Miami, Florida
                </p>
              </div>
            </div>

            {/* CTA */}
            <div>
              <LetsBuildTogether />
            </div>
          </div>
        </div>

        {/* Contact Image */}
        <div className="flex justify-center md:justify-end w-full h-150 ">
          <Image
            src={frankobiadi}
            alt="Contact"
            width={500}
            height={300}
            priority
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Contactheader;

