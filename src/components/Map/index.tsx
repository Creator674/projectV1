import { Box, Flex, Heading } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';

export const YandexMap = ({ center, placemark }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (typeof ymaps === 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
      script.type = 'text/javascript';
      script.onload = () => {
        ymaps.ready(initMap);
      };
      document.head.appendChild(script);
    } else {
      ymaps.ready(initMap);
    }

    const initMap = () => {
      if (!mapRef.current) {
        mapRef.current = new ymaps.Map('map', {
          center: center || [53.915456, 27.571425],
          zoom: 16,
          controls: [],
          copyrights: [],
        });

        const myPlacemark = new ymaps.Placemark(placemark || [53.915456, 27.571425], {
          balloonContent: 'Метка в центре карты',
        });

        mapRef.current.geoObjects.add(myPlacemark);
      }
    };

    return () => {
      if (mapRef.current) {
        mapRef.current.destroy();
      }
    };
  }, [center, placemark]);

  return (
    <Flex
      flexDirection='column'
      gap='16px'
      width='100%'
      alignItems='flex-start'
    >
      <Heading
        variant='h4'
        color='neutral.0'
      >
        г. Минск, ул. Куйбышева 22
      </Heading>
      <Box
        id='map'
        sx={{
          '[class*="ground-pane"]': {
            filter: 'grayscale(1) invert(0.9)',
          },
        }}
        width='100%'
        aspectRatio={1}
        maxHeight='480px'
      />
    </Flex>
  );
};
