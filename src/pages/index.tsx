import { Fragment, ReactElement } from 'react';
import { Heading } from '@chakra-ui/react';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';

import { DefaultPageLayout } from '@/components/Layouts';

import { NextPageWithLayout } from './_app';

interface HomePageProps {
  heading: string;
  testQuery?: string | string[];
}

const Home: NextPageWithLayout<HomePageProps> = ({ heading, testQuery }) => {
  return (
    <Fragment>
      <Heading>Home page test app</Heading>

      <Heading>Srr data: {heading}</Heading>

      {testQuery && <Heading>Query?: {testQuery}</Heading>}
    </Fragment>
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
      testQuery: test
    }
  };

  return { ...populatedWithPositionsProps };
}
