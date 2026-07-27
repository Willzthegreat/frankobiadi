import AboutGrid from "@/components/aboutGrid";
import AfricanGreatestOpportunity from "@/components/africanGreatestOportunity";
import BuildTogetherCom from "@/components/buildTogetherCom";
import Gallery from "@/components/gallery";
import BuiltImage from "@/public/buildTogether.png";

const About = () => {
  return (
    <div>
     
      <Gallery />
      <BuildTogetherCom showImage={false} />
    </div>
  );
};

export default About;