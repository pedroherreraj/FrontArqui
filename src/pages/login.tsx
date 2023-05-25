import React, { useEffect, useState } from 'react';
import { useUser } from '../context/userContext';
import axios from 'axios';

import GoogleLogin from '../components/logWithGoogle';

interface LoginInfo {
  email: string;
  password: string;
}

const Login = (): React.ReactElement => {
  const { setUser } = useUser();
  const [token, setToken] = useState<string | undefined>(undefined);
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [userData, setUserData] = useState<any>({});


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

      const login = async () => {
        try {
          const response = await axios.post('https://api.pdesolmi.me/users/login', {phone: 123}, {
            headers: { JwtToken: userData['token'] },
          });

        } catch (error) {
          console.error(error);
        }
      };
      login();
    }
  }, [googleSuccess]);

  // @ts-ignore
  return (
      <div>
        <div>
          <GoogleLogin
            googleSuccess={googleSuccess}
            setUserData={setUserData}
            setGoogleSuccess={setGoogleSuccess}
          />
        </div>
      </div>
  );
};

export default Login;
