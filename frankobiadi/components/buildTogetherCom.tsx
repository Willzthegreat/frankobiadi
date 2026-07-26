import Image, { StaticImageData } from "next/image";
import LetsBuildTogether from "./letsBuildTogether";

type BuildTogetherComProps = {
  image?: StaticImageData;
  showImage?: boolean;
};

const BuildTogetherCom = ({
  image,
  showImage = false,
}: BuildTogetherComProps) => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="flex flex-col items-center gap-10 lg:gap-16">

        {showImage && image && (
          <div className="flex w-full justify-center lg:w-1/2">
            <div className="relative h-80 w-80 overflow-hidden rounded-full shadow-xl sm:h-96 sm:w-96">
              <Image
                src={image}
                alt="Build Together"
                fill
                className="object-cover"
              />
            </div>
          </div>
        )}

        <div className="w-full text-center lg:w-1/2">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
            Let's Build Together
          </h2>

          <p className="mb-8 text-lg leading-relaxed text-gray-600">
            “The future of Africa will be built by entrepreneurs,
            strengthened by partnerships and sustained by institutions.
            My work exists at the intersection of all three.”
          </p>

          <LetsBuildTogether />
        </div>

      </div>
    </section>
  );
};

export default BuildTogetherCom;