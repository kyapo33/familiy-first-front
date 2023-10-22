import { FC } from 'react';
import SignUpForm from './components/SignUpForm';
import { Stack } from '@mui/joy';

const SignUp: FC = () => {
  return (
    <Stack height="100vh" width="100vw">
      <SignUpForm />
    </Stack>
  );
};

export default SignUp;
