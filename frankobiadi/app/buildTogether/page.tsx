import AfricanGreatestOpportunity from '@/components/africanGreatestOportunity'
import React from 'react'
import lBImage from "@/public/let'sBuild.png"
import Gallery from '@/components/gallery'
import BuildTogetherCom from '@/components/buildTogetherCom'
import LetsBuildGrid from '@/components/letsBuildGrid'
import WhoIPaternerWith from '@/components/whoIPaternerWith'

const Page = () => {
  return (
    <>
       <AfricanGreatestOpportunity
        text="Creating Meaningful Partnerships"
        headingClassName="mt-20 md:mt-20 text-5xl font-bold lg:text-6xl"
        image={lBImage}
        imageClassName="hidden md:block -mt-26 sm:-mt-36 w-32 md:w-48 lg:w-64"
        paragraphClassName="max-w-xl text-[15px] leading-9 mt-20 lg:mt-36 text-gray-100/60"
        ptext={
          <>
            The most meaningful achievements are rarely built alone. <br /> They are the result of shared vision, complementary strengths and trusted partnerships. <br /> <br /> If you're building something meaningful, I'd welcome the opportunity to explore how we can create lasting value together.
          </>
        }
      />
      <WhoIPaternerWith />
      <LetsBuildGrid />
      <Gallery />
      <BuildTogetherCom showImage={false} />
    </>
  )
}

export default Page
