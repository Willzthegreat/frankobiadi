import AfricanGreatestOpportunity from '@/components/africanGreatestOportunity'
import BuildTogetherCom from '@/components/buildTogetherCom'
import Gallery from '@/components/gallery'
import PhilosophyGrid from '@/components/philosophyGrid'
import BuiltImage from '@/public/buildTogether.png'
import Philosophy from '@/public/philosophy.png';

import React from 'react'

const Page = () => {
  return (
    <>
      <AfricanGreatestOpportunity
        text="The Principles That Shape My Work"
        headingClassName="mt-20 md:mt-20 text-5xl font-bold lg:text-6xl"
        image={Philosophy}
        imageClassName="hidden md:block -mt-26 sm:-mt-36 w-32 md:w-48 lg:w-64"
        paragraphClassName="max-w-xl text-sm leading-9 mt-20 lg:mt-36 text-gray-100/60"
        ptext={
          <>
            The future we build is determined by the principles we choose to uphold. These beliefs shape every venture I create, every partnership I form and every decision I make.
          </>
        }
      />
      <PhilosophyGrid />
      <Gallery />
      <BuildTogetherCom showImage={false} />
    </>
  )
}

export default Page
