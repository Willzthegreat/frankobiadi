import BuildTogetherCom from '@/components/buildTogetherCom'
import Gallery from '@/components/gallery'
import image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <>
      <div>
        <Gallery />
        <BuildTogetherCom showImage={false} />
      </div>
    </>
  )
}

export default About
