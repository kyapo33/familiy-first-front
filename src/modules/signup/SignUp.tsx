import { FC } from 'react';
import SignUpForm from './components/SignUpForm';
import { Stack } from '@mui/joy';

const SignUp: FC = () => {
  return (
    <Stack height="100%" width="100%" paddingTop="16px">
      <SignUpForm />
    </Stack>
  );
};

export default SignUp;
