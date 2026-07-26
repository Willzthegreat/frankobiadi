import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

import Zimalek from "@/public/Zimalek.png";
import Zmarket from "@/public/Zmarket.png";
import Roova from "@/public/Roova.png";
import WGorillaz from "@/public/WhiteGorillazz.png";
import ZFoundation from "@/public/Zfoundation.png";

const companies = [
  {
    name: "Zmarket",
    description:
      "A commerce infrastructure platform modernizing African trade by connecting merchants, consumers and digital infrastructure to create smarter, more connected markets.",
    logo: Zmarket,
  },
  {
    name: "Roova",
    description:
      "A fintech company building modern financial infrastructure that simplifies payments, expands financial access and powers the digital economy.",
    logo: Roova,
  },
  {
    name: "White Gorillaz Media",
    description:
      "A creative media company producing stories, digital experiences and original content that inspire, educate and elevate African voices across global audiences.",
    logo: WGorillaz,
  },
  {
    name: "Zimalek Foundation",
    description:
      "A non-profit initiative committed to empowering entrepreneurs, developing future leaders and expanding economic opportunities through education, innovation and community development.",
    logo: ZFoundation,
  },
];

const WorkGrid = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
        {/* Left Card */}
        <div className="rounded-2xl border p-8 shadow-sm">
          <h2 className="mb-4 text-3xl font-bold">Zimalek</h2>

          <p className="mb-8 text-gray-600 leading-8">
            A venture-building and business growth company dedicated to creating,
            funding and scaling high-impact African businesses. Zimalek partners
            with founders, enterprises, investors and public-sector institutions
            to unlock sustainable growth through venture creation, executive
            advisory, enterprise strategy, capital readiness, strategic
            partnerships and market expansion.
            <br />
            <br />
            Driven by a long-term vision of strengthening African enterprise,
            Zimalek exists to build the businesses, systems and institutions that
            will power Africa's next generation of economic growth.
          </p>

          <Button variant="outline" className="px-4 cursor-pointer border-none py-4 overflow-hidden">
            <Image
              src={Zimalek}
              alt="Zimalek Logo"
              width={120}
              height={40}
            />
          </Button>
        </div>

        {/* Right Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {companies.map((company, index) => (
            <div
              key={index}
              className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="mb-3 text-2xl font-semibold">{company.name}</h3>

              <p className="mb-6 text-gray-600 leading-7">
                {company.description}
              </p>

              <Button variant="outline" className="px-4 cursor-pointer border-none py-4 overflow-hidden">
                <Image
                  src={company.logo}
                  alt={`${company.name} Logo`}
                  width={70}
                  height={35}
                  className=""
                />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkGrid;