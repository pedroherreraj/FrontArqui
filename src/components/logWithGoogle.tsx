import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
//import { useUser } from "../context/userContext";


interface CompProps {
  googleSuccess: boolean;
  setGoogleSuccess?: (a: boolean) => void;
  setUserData: (a: any) => void;
  isSignUp: boolean;
}

const Login = ({ googleSuccess, setGoogleSuccess, setUserData, isSignUp }: CompProps): React.ReactElement => {
  const googleLogin = useGoogleLogin({
    onSuccess: async (response) => {
      setGoogleSuccess && setGoogleSuccess(true);
      setUserData && setUserData({ provider: 'google_oauth2', token: response.access_token });
    },
  });

  return (
    <div  onClick={() => (googleSuccess ? null : googleLogin())}>
      <div>
        {isSignUp
          ? googleSuccess
            ? 'Connected with Google'
            : 'Sign Up'
          : 'Log In'}
      </div>
      {googleSuccess && <i className="bi bi-check-circle-fill"></i>}
    </div>
  );
};

export default Login;
