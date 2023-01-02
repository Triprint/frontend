import Link from 'next/link';

import { Box, Button, Container, Flex, Logo } from '@triprint/ui';

import { PAGE_URL } from '@/constants/url';

const Header = () => {
  return (
    <Box
      as="header"
      css={{
        position: 'sticky',
        top: 0,
        backgroundColor: '$surface',
      }}
    >
      <Container withPadding>
        <Flex css={{ height: '$space$16' }} align="center" justify="between">
          <h1>
            <Link href="/">
              <Logo size={20} gradient />
            </Link>
          </h1>
          <Flex>
            <Link href={PAGE_URL.LOGIN}>
              <Button as="div" variant="primary">
                로그인
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
