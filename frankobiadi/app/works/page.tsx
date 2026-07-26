import AfricanGreatestOpportunity from '@/components/africanGreatestOportunity'
import BuildTogetherCom from '@/components/buildTogetherCom'
import Gallery from '@/components/gallery'
import React from 'react'
import BuiltImage from "@/public/Company.png";
import WorkLastingValue from '@/components/workLastingValue';
import WorkGrid from '@/components/workGrid';

const Page = () => {
  return (
    <>
      <div>
        <AfricanGreatestOpportunity
          text="Building Ventures That Strengthen African Enterprise"
          headingClassName="mt-20 md:mt-20 text-5xl font-bold lg:text-6xl"
          image={BuiltImage}
          imageClassName="hidden md:block -mt-56 sm:-mt-56 w-42 md:w-48 lg:w-64"
          paragraphClassName="max-w-xl text-sm leading-9 mt-20 lg:mt-56 text-gray-100/60"
          ptext={
            <>
            Every venture I build begins with one question:
            </>
          }
        />
        <WorkLastingValue  />
        <WorkGrid />
        <Gallery />
        <BuildTogetherCom showImage={false} />
      </div>
    </>
  )
}

export default Page
