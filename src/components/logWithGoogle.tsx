import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
//import { useUser } from "../context/userContext";
import { useLocation } from "react-router-dom";

// import styles from './Login.module.scss';
// import GoogleIcon from 'assets/session/google_icon.svg';

interface CompProps {
  googleSuccess: boolean;
  setGoogleSuccess?: (a: boolean) => void;
  setUserData: (a: any) => void;
}

const Login = ({ googleSuccess, setGoogleSuccess, setUserData }: CompProps): React.ReactElement => {
  const location = useLocation();

  const isSignup : boolean = location.pathname === '/signup';
  const googleLogin = useGoogleLogin({
    onSuccess: async (response) => {
      setGoogleSuccess && setGoogleSuccess(true);
      setUserData && setUserData({ provider: 'google_oauth2', token: response.access_token });
    },
  });

  return (
    <div  onClick={() => (googleSuccess ? null : googleLogin())}>
      <div>
        {isSignup
          ? googleSuccess
            ? 'Connected with Google'
            : 'Sign up with Google'
          : 'Log in with Google'}
      </div>
      {googleSuccess && <i className="bi bi-check-circle-fill"></i>}
    </div>
  );
};

export default Login;
