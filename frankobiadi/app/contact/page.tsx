import BuildTogetherCom from '@/components/buildTogetherCom'
import ContactGrid from '@/components/contactGrid'
import Contactheader from '@/components/contactheader'
import Gallery from '@/components/gallery'
import React from 'react'

const Contact = () => {
  return (
    <>
      <Contactheader  />
      <ContactGrid />
      <Gallery />
      <BuildTogetherCom showImage={false} />
    </>
  )
}

export default Contact
