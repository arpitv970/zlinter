import React from 'react'
import Head from 'next/head'

interface PropTypes {
  title: string,
  img: string,
  desc: string,
}

const HeadSEO = ({ title, img, desc }: PropTypes) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={desc} />

      <meta property="og:image" content={img} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="675" />
      <meta name="twitter:card" content={desc} />
    </Head>
  )
}

export default HeadSEO

