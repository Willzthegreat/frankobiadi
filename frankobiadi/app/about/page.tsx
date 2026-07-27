import AboutHeader from "@/components/aboutHeader";
import AboutHeaderImage from "@/components/aboutHeaderImage";
import ArticlesInsights from "@/components/articlesInsights";
import BuildTogetherCom from "@/components/buildTogetherCom";
import Gallery from "@/components/gallery";
import LetsBuildTogether from "@/components/letsBuildTogether";
import WorkLastingValue from "@/components/workLastingValue";

const About = () => {
  return (
    <div>
      <AboutHeader  />
      <AboutHeaderImage />
      <WorkLastingValue text="That belief has guided every decision I've made as an entrepreneur." headText="I am a husband, father and Pan-African Venture Builder committed to building the ventures, systems and institutions that enable African businesses to start, scale and compete globally." />
       <ArticlesInsights
        title={"This conviction shapes everything I build. Whether launching ventures, forging strategic partnerships, advising organizations or supporting entrepreneurs, my focus remains the same: creating businesses and ecosystems that generate enduring value and strengthen Africa's economic future.  I don't measure success by the number of companies I build, but by the opportunities they create, the industries they strengthen and the lives they improve"}
        titleClassName={""}
        headText={"My ambition extends beyond entrepreneurship."}
        infoText={"I want to help build the systems, institutions and ecosystems that will empower future generations of African businesses to thrive locally and compete globally. Because the businesses we build today will define the Africa we leave tomorrow"}
        headTextClassName={"text-xl font-semibold py-3"}
        infoTextClassName={""}
        imageClassName={"hidden"}
        viewButton={<>
          <LetsBuildTogether />
        </>}
        viewButtonClassName={""}        />
      <Gallery />
      <BuildTogetherCom showImage={false} />
    </div>
  );
};

export default About;