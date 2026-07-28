import BuildTogetherCom from '@/components/buildTogetherCom'
import Gallery from '@/components/gallery'
import React from 'react'

const Page = () => {
  return (
    <>
      <Gallery />
      <BuildTogetherCom showImage={false} />
    </>
  )
}

export default Page
