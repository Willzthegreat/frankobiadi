import AfricanGreatestOpportunity from "@/components/africanGreatestOportunity";
import BuildTogetherCom from "@/components/buildTogetherCom";
import Gallery from "@/components/gallery";
import BuiltImage from "@/public/buildTogether.png";

const About = () => {
  return (
    <div>
      <AfricanGreatestOpportunity
        text="Building the Foundations of African Enterprise"
        headingClassName="mt-20 md:mt-20 text-5xl font-bold lg:text-6xl"
        image={BuiltImage}
        imageClassName="hidden md:block -mt-56 sm:-mt-56 w-32 md:w-48 lg:w-64"
        paragraphClassName="max-w-xl text-sm leading-9 mt-20 lg:mt-56 text-gray-100/60"
        ptext={
          <>
            I build more than companies.
            <br />
            <br />
            I build ventures, partnerships and business infrastructure that
            create the conditions for resilient businesses, stronger markets
            and long-term economic transformation across Africa.
          </>
        }
      />
      <Gallery />
      <BuildTogetherCom showImage={false} />
    </div>
  );
};

export default About;