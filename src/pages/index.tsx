import { ReactElement } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';

import { DefaultPageLayout } from '@/components/Layouts';
import { InfoSection, PhotoSliderSection } from '@/Sections';
import { StaffSection } from '@/Sections';
import { ScheduleSection } from '@/Sections/Schedule';
import { FaqSection } from '@/Sections/Faq';

import { NextPageWithLayout } from './_app';

interface HomePageProps {
  heading: string;
  testQuery?: string | string[];
}

const Home: NextPageWithLayout<HomePageProps> = ({ heading, testQuery }) => {
  return (
    <Box minW='360px'>
      <Heading variant='h2'>Srr data: {heading}</Heading>
      <InfoSection />
      <StaffSection />
      <ScheduleSection />
      <PhotoSliderSection />
      <FaqSection />
      {testQuery && <Heading>Query?: {testQuery}</Heading>}
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
