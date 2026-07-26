import AfricanGreatestOportunity from "@/components/africanGreatestOportunity";
import ArticlesInsights from "@/components/articlesInsights";
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
      <ArticlesInsights />
      <Carousel />
      <Gallery />
      <BuildTogetherCom image={ProImage} showImage={true}  />
    </div>
  );
}