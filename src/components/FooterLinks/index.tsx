import { Flex, Link } from '@chakra-ui/react';
import React, { FC } from 'react';

import InstagramLogo from '../../assets/images/InstagramLogo.png';
import TelegramLogo from '../../assets/images/TelegramLogo.png';
import { LinkWithIcon } from '../LinkWithIcon';

const telephone = '+375 29 123 45 67';
const mail = 'p4pclub@gmail.com';
const instagramLink = 'https://www.instagram.com/?hl=ru';
const telegramLink = 'https://telegram.org/';

export const FooterLinks: FC = () => {
  return (
    <Flex
      flexDirection='column'
      gap='16px'
      alignItems='flex-start'
      width='100%'
    >
      <Link href={`tel: ${telephone}`}>{telephone}</Link>
      <Link href={`mailto: ${mail}`}>{mail}</Link>
      <LinkWithIcon
        image={InstagramLogo}
        href={instagramLink}
      >
        Instagram
      </LinkWithIcon>
      <LinkWithIcon
        image={TelegramLogo}
        href={telegramLink}
      >
        Telegram
      </LinkWithIcon>
    </Flex>
  );
};
