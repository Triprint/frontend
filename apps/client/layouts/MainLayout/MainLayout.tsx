import { Box } from '@triprint/ui';

import { Header } from './Header';

interface MainLayoutProps {
  children?: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />
      <Box as="main" css={{ minHeight: '100vh' }}>
        {children}
      </Box>
    </>
  );
};

export default MainLayout;
