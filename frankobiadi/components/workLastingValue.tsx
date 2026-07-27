import React from "react";

type WorkLastingValueProps = {
  text?: React.ReactNode;
  headText?: React.ReactNode;
}


const WorkLastingValue = ({
  text,
  headText,
  
}: WorkLastingValueProps) => {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-12 xl:px-20">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-gray-500 md:text-base">
          {/* How can this create lasting value for Africa? */}
          {text}
        </p>

        <h2 className="mt-6 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl md:text-4xl">
          {/* Each company within my portfolio addresses a critical challenge while
          contributing to a larger vision: building the infrastructure,
          platforms and institutions that empower African businesses,
          entrepreneurs and communities to thrive. */}
          {headText}
        </h2>
      </div>
    </section>
  );
};

export default WorkLastingValue;