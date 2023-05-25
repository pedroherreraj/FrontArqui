import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider} from "@react-oauth/google";
import UserProvider from "./context/userContext";
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={"363693388817-tafudiojqh636g22ifi5k2necp9eklab.apps.googleusercontent.com"}>
      <UserProvider>
        <App />
      </UserProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
