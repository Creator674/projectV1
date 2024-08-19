// import useSWR from 'swr'
import { FC, Fragment, ReactNode } from 'react';

interface DefaultPageLayoutProps {
  children: ReactNode;
}

export const DefaultPageLayout: FC<DefaultPageLayoutProps> = ({ children }) => {
  // const { data, error } = useSWR('/api/navigation')
  // if (error) return <div>Failed to load</div>
  // if (!data) return <div>Loading...</div>

  return (
    <Fragment>
      {/* <Header /> */}

      {/* <AuthLayout>{children}</AuthLayout> */}
      {/* <PageWrapper>{children}</PageWrapper> */}
      {children}
    </Fragment>
  );
};
