import React, { FC } from 'react';
import SignUpForm from './components/SignUpForm';
// import { useSignUp } from "../../hooks/mutations/useSignUp";
// import { SignUpInputDto } from "../../schemas/Interfaces";
// import { RoutesPath } from "../../routes/Paths";
// import { useNavigate } from "react-router-dom";

const SignUp: FC = () => {
  // const signUpMutation = useSignUp();

  // const navigate = useNavigate();

  // const onSubmit = async (data: SignUpInputDto) => {
  //     await signUpMutation.mutateAsync(data);
  //     navigate(RoutesPath.News);
  // }

  return (
    <div>
      <SignUpForm />
    </div>
  );
};

export default SignUp;
