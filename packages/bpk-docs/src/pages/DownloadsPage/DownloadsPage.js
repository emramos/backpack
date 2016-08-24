import React from 'react'
import Helmet from 'react-helmet'

import BpkHeading from 'bpk-component-heading'
import BpkParagraph from 'bpk-component-paragraph'
import BpkContentContainer from 'bpk-component-content-container'
import { BpkList, BpkListItem } from 'bpk-component-list'
import BpkLink from 'bpk-component-link'

import './downloads-page.scss'

const DownloadsPage = () => (
  <section className='bpkdocs-downloads-page__container'>
    <Helmet title='Downloads' />
    <BpkContentContainer>
      <BpkHeading level='h1'>Downloads</BpkHeading>
      <BpkParagraph>Here you can find a variety of resources to help you design Skyscanner products:</BpkParagraph>
      <BpkHeading level='h2'>Color palettes</BpkHeading>
      <BpkHeading level='h3'>Core</BpkHeading>
      <BpkList>
        <BpkListItem><BpkLink href='https://www.dropbox.com/s/oea9wmk3l757c81/product_rgb.ase?dl=0' blank>Adobe Swatch Exchange</BpkLink></BpkListItem>
        <BpkListItem><BpkLink href='https://www.dropbox.com/s/gerab8vjv92141g/product_rgb.clr?dl=0' blank>Mac</BpkLink></BpkListItem>
      </BpkList>
      <BpkHeading level='h3'>Extended (for illustration only)</BpkHeading>
      <BpkList>
        <BpkListItem><em>Coming soon</em></BpkListItem>
      </BpkList>
      <BpkHeading level='h2'>Icons</BpkHeading>
      <BpkList>
        <BpkListItem><em>Coming soon</em></BpkListItem>
        <BpkListItem><em>Coming soon</em></BpkListItem>
      </BpkList>
      <BpkHeading level='h2'>Sketch</BpkHeading>
      <BpkList>
        <BpkListItem><BpkLink href='https://www.dropbox.com/s/3acziruyha8zqdc/Responsive-grids.sketch?dl=0' blank>Responsive grids</BpkLink></BpkListItem>
        <BpkListItem><BpkLink href='https://www.dropbox.com/s/hxyv9jckjmln29i/Icon%20template.sketch?dl=0' blank>Icon grids</BpkLink></BpkListItem>
        <BpkListItem><BpkLink href='https://www.dropbox.com/sh/aodde0j6gmgllgw/AABrmRTv6j1-VqUKuSdWDxqla?dl=0' blank>Craft Library</BpkLink></BpkListItem>
      </BpkList>
    </BpkContentContainer>
  </section>
)

export default DownloadsPage