/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2017 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import { storiesOf } from '@storybook/react';

import BpkText from 'bpk-component-text';
import BpkImage, { BpkBackgroundImage, withLazyLoading, withLoadingBehavior } from './index';
import image from 'file-loader!./image.jpg'; // eslint-disable-line

const documentIfExists = typeof window !== 'undefined' ? document : null;
const FadingImage = withLoadingBehavior(BpkImage);
const LazyLoadedImage = withLazyLoading(BpkImage, documentIfExists);
const FadingLazyLoadedImage = withLoadingBehavior(withLazyLoading(BpkImage, documentIfExists));
const FadingLazyLoadedBackgroundImage = withLoadingBehavior(withLazyLoading(BpkBackgroundImage, documentIfExists));

storiesOf('bpk-component-image', module)
  .add('Default', () => (
    <BpkImage
      altText="image"
      width={612}
      height={408}
      fullWidth={false}
      src={image}
    />
  ))
    .add('Full Width', () => (
      <BpkImage
        altText="image"
        width={612}
        height={408}
        src={image}
      />
    ))
  .add('With Animation', () => (
    <FadingImage
      altText="image"
      width={612}
      height={408}
      fullWidth={false}
      src={image}
    />
  ))
  .add('With Lazy Loading', () => (
    <LazyLoadedImage
      altText="image"
      width={612}
      height={408}
      fullWidth={false}
      src={image}
    />
  ))
  .add('With Lazy Loading and Animation', () => (
    <FadingLazyLoadedImage
      altText="image"
      width={612}
      height={408}
      fullWidth={false}
      src={image}
    />
  ))
  .add('Background Image', () => (
    <BpkBackgroundImage
      style={{
        width: '816',
        height: '20rem',
      }}
      imageStyle={{
        width: '100%',
        height: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
      }}
      src={image}
    >
      <div style={{ opacity: 0.7, marginLeft: 35, paddingTop: 10 }} >
        <BpkText tagName="h2" textStyle="lg" >Lorem ipsum dolor sit amet</BpkText>
      </div>
    </BpkBackgroundImage >
  ))
  .add('Background Image with Lazy Loading and Animation', () => (
    <FadingLazyLoadedBackgroundImage
      style={{
        width: '816',
        height: '20rem',
      }}
      imageStyle={{
        width: '100%',
        height: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
      }}
      src={image}
    >
      <div style={{ opacity: 0.7, marginLeft: 35, paddingTop: 10 }} >
        <BpkText tagName="h2" textStyle="lg" >Lorem ipsum dolor sit amet</BpkText>
      </div>
    </FadingLazyLoadedBackgroundImage >
  ))
  ;