import type { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { LoadingIcon } from '@triprint/icons';
import { Button, Flex, Spacing, Text } from '@triprint/ui';

import { PAGE_URL } from '@/constants/url';
import { AuthLayout } from '@/layouts/AuthLayout';

interface KakaoPageProps {
  code: string;
}

const KakaoPage: NextPage<KakaoPageProps> = ({ code }) => {
  const router = useRouter();
  const [isError, setError] = useState<boolean>(false);

  useEffect(() => {
    setError(true);
  }, [router]);

  if (isError) {
    return (
      <AuthLayout>
        <Flex direction="column" align="center" justify="center">
          <Text as="p" variant="variant" alignment="center" size="lg">
            로그인에 실패하였습니다.
            <br />
            잠시후에 다시 시도해주세요.
          </Text>
          <Spacing size="1rem" />
          <Link href={PAGE_URL.LOGIN}>
            <Button as="div" size="lg" variant="text">
              로그인 페이지로 이동
            </Button>
          </Link>
        </Flex>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout>
      <Flex direction="column" align="center" justify="center">
        <LoadingIcon width={48} height={48} color="#f43f5e" />
      </Flex>
    </AuthLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { code } = context.query;

  if (code === undefined || Array.isArray(code)) {
    return {
      redirect: {
        permanent: false,
        destination: PAGE_URL.LOGIN,
      },
    };
  }

  return {
    props: {
      code,
    },
  };
};

export default KakaoPage;
