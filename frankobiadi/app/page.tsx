// import AfricanGreatestOportunity from "@/components/africanGreatestOportunity";
// import ArticlesInsights from "@/components/articlesInsights";
// import BuildTogetherCom from "@/components/buildTogetherCom";
// import Carousel from "@/components/carousel";
// import Gallery from "@/components/gallery";
// import Header from "@/components/header";
// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex flex-col font-font-calibri items-center mx-none justify-center bg-zinc-50 font-sans dark:bg-black">
//       <Header />
//       <AfricanGreatestOportunity />
//       <ArticlesInsights />
//       <Carousel />
//       <Gallery />
//       <BuildTogetherCom image={ProImage} />
//     </div>
//   );
// }


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
      <AfricanGreatestOportunity />
      <ArticlesInsights />
      <Carousel />
      <Gallery />
      <BuildTogetherCom image={ProImage} showImage={true}  />
    </div>
  );
}