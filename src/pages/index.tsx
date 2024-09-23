import { ReactElement } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';

import { DefaultPageLayout } from '@/components/Layouts';
import { InfoSection, PhotoSliderSection, ScheduleSection, StaffSection, FaqSection, FooterSection } from '@/sections';
import { PricesSection } from '@/sections/Prices';

import { NextPageWithLayout } from './_app';

interface HomePageProps {
  heading: string;
  testQuery?: string | string[];
}

const Home: NextPageWithLayout<HomePageProps> = () => {
  return (
    <Box minW='360px'>
      <InfoSection />
      <StaffSection />
      <PricesSection />
      <ScheduleSection />
      <PhotoSliderSection />
      <FaqSection />
      <FooterSection />
    </Box>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultPageLayout>{page}</DefaultPageLayout>;
};

export default Home;

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<HomePageProps>> {
  const { test } = context.query;

  const populatedWithPositionsProps: { props: HomePageProps } = {
    props: {
      heading: 'data from server',
      testQuery: test || 'query',
    },
  };

  return { ...populatedWithPositionsProps };
}
