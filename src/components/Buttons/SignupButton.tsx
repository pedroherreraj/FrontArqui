// import './Button.css';

// export const SignUpButton = () => {
//     return (
//       <a className="button" href="/signup"> 
//         Sign Up
//       </a>
//       //<LoginPage/>
//     );
// };

import React, { useEffect, useState } from 'react';
import { useUser } from '../../context/userContext';
import { useNavigate } from "react-router-dom";
import GoogleLogin from '../logWithGoogle';

interface LoginInfo {
  email: string;
  password: string;
}

const SignUpButton = (): React.ReactElement => {
  const { setUser } = useUser();
  const [token, setToken] = useState<string | undefined>(undefined);
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [userData, setUserData] = useState<any>({});
  const router = useNavigate();


  const [warningAdvice, setWarningAdvice] = useState<string>('');
  const [googleSuccess, setGoogleSuccess] = useState<boolean>(false);


  useEffect(() => {

  }, [userData]);

  useEffect(() => {
    if (googleSuccess) {
      setToken(userData['token']);
      const newUser = {
        phone: '',
        token: userData['token']
      };
      setUser(newUser);

      router('/contact')
    }
  }, [googleSuccess]);


  return (
    <div>
      <div className="button">
        <GoogleLogin
          googleSuccess={googleSuccess}
          setUserData={setUserData}
          setGoogleSuccess={setGoogleSuccess}
          isSignUp={true}
        />
      </div>
    </div>
  );
};

export default SignUpButton;