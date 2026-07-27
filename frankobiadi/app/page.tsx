import AfricanGreatestOportunity from "@/components/africanGreatestOportunity";
import ArticlesInsights from "@/components/articlesInsights";
import ArticlesFeatures from "@/components/articuleFeatures";
import BuildTogetherCom from "@/components/buildTogetherCom";
import Carousel from "@/components/carousel";
import Gallery from "@/components/gallery";
import Header from "@/components/header";
import ProImage from "@/public/poImage6.avif";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-zinc-50 font-font-calibri dark:bg-black">
      <Header />
      <AfricanGreatestOportunity headingClassName={"text-2xl md:4xl"} imageClassName={"mt-10"} text={"I believe Africa's greatest opportunity is not hidden beneath its natural resources, but within its entrepreneurs. My life's work is dedicated to building the ventures, systems and institutions that enable them to create lasting prosperity."} />
      <ArticlesInsights 
        titleClassName={"text-3xl font-bold leading-tight lg:text-4xl"}
        headTextClassName={"mt-3 text-sm text-gray-500"}
        infoTextClassName={"leading-8 text-gray-600"}
        imageClassName={"mb-10 flex justify-center lg:justify-start"}
        viewButton={<>
          <div>
            <button className="flex items-center cursor-pointer justify-center gap-2 font-semibold text-black transition hover:text-green-600 lg:justify-start ">
              VIEW CASE STUDY
              <i className="bx bx-right-arrow-alt  text-2xl"></i>
            </button>
          </div>
        </>} 
        viewButtonClassName={"flex items-center justify-center gap-2 py-4 font-semibold text-black transition hover:text-green-600 lg:justify-start"}  />
      <ArticlesFeatures />
      <Carousel />
      <Gallery />
      <BuildTogetherCom image={ProImage} showImage={true}  />
    </div>
  );
}