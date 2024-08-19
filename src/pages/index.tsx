import { Fragment, ReactElement } from 'react';
import { Heading } from '@chakra-ui/react';

import { DefaultPageLayout } from '@/components/Layouts';

import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return (
    <Fragment>
      <Heading>Home page test app</Heading>
    </Fragment>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultPageLayout>{page}</DefaultPageLayout>;
};

export default Home;
