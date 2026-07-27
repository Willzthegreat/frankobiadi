import React from "react";
import Link from "next/link";

const LetsBuildTogether = () => {
  return (
    // <section className="flex justify-center py-10">
      <Link href={"/buildTogether"} className="cursor-pointer rounded-md bg-black px-6 py-3 text-white transition-colors hover:bg-gray-800">
        Let's Build Together
      </Link>
    // </section>
  );
};

export default LetsBuildTogether;