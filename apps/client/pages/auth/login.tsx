import { NextPage } from 'next';

import { Box, Spacing } from '@triprint/ui';

import { KakaoLoginButton } from '@/components/auth';
import { AuthLayout } from '@/layouts/AuthLayout';

const LoginPage: NextPage = () => {
  return (
    <AuthLayout>
      <Box>
        <Spacing size="2rem" />
        <KakaoLoginButton />
      </Box>
    </AuthLayout>
  );
};

export default LoginPage;
