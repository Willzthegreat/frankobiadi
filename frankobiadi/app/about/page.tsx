import AboutGrid from "@/components/aboutGrid";
import AfricanGreatestOpportunity from "@/components/africanGreatestOportunity";
import BuildTogetherCom from "@/components/buildTogetherCom";
import Gallery from "@/components/gallery";
import WorkLastingValue from "@/components/workLastingValue";
import BuiltImage from "@/public/buildTogether.png";

const About = () => {
  return (
    <div>
      <WorkLastingValue text="That belief has guided every decision I've made as an entrepreneur." headText="I am a husband, father and Pan-African Venture Builder committed to building the ventures, systems and institutions that enable African businesses to start, scale and compete globally." />
      <Gallery />
      <BuildTogetherCom showImage={false} />
    </div>
  );
};

export default About;