import { FC } from 'react';
import { Stack } from '@mui/joy';
import LoginForm from './components/LoginForm';

const Login: FC = () => {
  return (
    <Stack height="100%" width="100%" paddingTop="16px">
      <LoginForm />
    </Stack>
  );
};

export default Login;
