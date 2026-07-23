import Image from "next/image";
import Link from "next/link";
import Pics from "@/public/Franks_pics.jpg";
import IntroText from "@/public/introText.png";
import { Button } from "@base-ui/react";

const Header = () => {
  return (
    <section className="mx-auto grid max-w-10xl grid-cols-1 items-center gap-12 px-6 py-10 md:grid-cols-2 lg:px-12">
      {/* Left Content */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_6fr]">
        {/* Intro Text */}
        <div className="flex justify-center py-25 pt-4 md:pt-16">
          <Image
            src={IntroText}
            alt="Intro Text"
            className="h-auto w-8 md:w-10 lg:w-12"
            priority
          />
        </div>

        {/* Main Content */}
        <div>
          <h1 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            Pan-African Venture Builder • Enterprise Architect • Ecosystem
            Builder
          </h1>

          <p className="mt-6 text-base leading-7 text-gray-600 md:text-lg">
            Building the ventures, systems and institutions that power African
            enterprise. I partner with founders, businesses, investors and
            institutions to build scalable ventures, strengthen business
            ecosystems and create the infrastructure that enables African
            businesses to start, scale and compete globally.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button className="rounded-md bg-black cursor-pointer px-6 py-3 text-white transition hover:bg-gray-800">
              Let's Build Together
            </Button>

            <Link className=" border-black px-6 py-3" href={"#"}>
              My Journey
            </Link>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex justify-center">
        <div className="relative h-64 w-64 overflow-hidden rounded-full sm:h-80 sm:w-80 lg:h-[500px] lg:w-[500px]">
          <Image
            src={Pics}
            alt="Hero section"
            fill
            sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 500px"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Header;