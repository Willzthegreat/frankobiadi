import React from "react";

const services = [
  {
    title: "Venture Building",
    description:
      "Creating and scaling ventures that solve meaningful problems while delivering sustainable commercial and societal value.",
  },
  {
    title: "Enterprise Strategy",
    description:
      "Helping organizations define strategic direction, strengthen execution and build resilient businesses prepared for long-term success.",
  },
  {
    title: "Strategic Partnerships",
    description:
      "Building high-impact collaborations between founders, enterprises, investors, governments and development organizations that unlock shared value.",
  },
  {
    title: "Capital Readiness",
    description:
      "Preparing businesses to attract investment through stronger governance, compelling positioning and scalable operating models.",
  },
  {
    title: "Market Expansion",
    description:
      "Supporting businesses as they expand across African and international markets with sustainable growth strategies.",
  },
  {
    title: "Innovation & Digital Transformation",
    description:
      "Leveraging technology to improve operational excellence, customer experience and competitive advantage.",
  },
  {
    title: "Ecosystem Development",
    description:
      "Designing platforms, networks and collaborative ecosystems that strengthen entrepreneurship and accelerate inclusive economic development.",
  },
];

const AboutGrid = () => {
  return (
    <section className="w-full px-4 py-12 sm:px-6 lg:px-12 xl:px-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-lg border border-gray-200 bg-gray-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
          >
            <h2 className="text-center text-xl font-bold text-gray-900 md:text-left">
              {service.title}
            </h2>

            <p className="mt-4 text-center leading-7 text-gray-600 md:text-left">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutGrid;