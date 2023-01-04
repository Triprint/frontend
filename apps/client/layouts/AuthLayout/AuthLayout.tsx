import Link from 'next/link';

import { Box, Container, Logo } from '@triprint/ui';

import { PAGE_URL } from '@/constants/url';

interface AuthLayoutProps {
  children?: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <>
      <Container as="header" css={{ paddingY: '$6' }} withPadding>
        <Link href={PAGE_URL.HOME}>
          <Logo size={20} gradient />
        </Link>
      </Container>
      <Container as="main" size="sm" withPadding>
        <Box css={{ paddingTop: '$20', '@desktop': { paddingTop: '$60' } }}>{children}</Box>
      </Container>
    </>
  );
};

export default AuthLayout;
