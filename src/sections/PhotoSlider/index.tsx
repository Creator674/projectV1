import React from 'react';

import { ImageSlider } from '@/components/ImageSlider';

import Trainer1 from '../../assets/images/Trainer1.png';
import Trainer2 from '../../assets/images/Trainer2.png';
import Trainer3 from '../../assets/images/Trainer3.png';

export const PhotoSliderSection = () => {
  return <ImageSlider images={[Trainer1, Trainer2, Trainer3]} />;
};
