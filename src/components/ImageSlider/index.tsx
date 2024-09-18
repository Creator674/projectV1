import { Box, Flex, IconButton } from '@chakra-ui/react';
import React, { FC, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

import ChevronLeft from '../../assets/icons/ChevronLeft.png';
import ChevronRight from '../../assets/icons/ChevronRight.png';

interface ImageSliderProps {
  images: string[] | StaticImport[];
}

export const ImageSlider: FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
  });
  return (
    <Box
      position='relative'
      width='full'
      overflow='hidden'
      {...handlers}
    >
      <IconButton
        aria-label='Previous Slide'
        onClick={prevSlide}
        position='absolute'
        left={{ base: '12px', lg: '40px' }}
        top='50%'
        transform='translateY(-50%)'
        zIndex='1'
        background='neutral.0'
        color='neutral.800'
      >
        <Image
          src={ChevronLeft}
          alt='Previous image'
          height={10}
        />
      </IconButton>
      <IconButton
        aria-label='Next Slide'
        onClick={nextSlide}
        position='absolute'
        right={{ base: '12px', lg: '40px' }}
        top='50%'
        transform='translateY(-50%)'
        zIndex='1'
        background='neutral.0'
        color='neutral.800'
      >
        <Image
          src={ChevronRight}
          alt='Next image'
          height={10}
        />
      </IconButton>

      <Flex
        justifyContent='center'
        alignItems='center'
        width='100%'
      >
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
        />
      </Flex>
    </Box>
  );
};
