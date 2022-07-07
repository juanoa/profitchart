import React, {useContext, useEffect, useState} from 'react';
import {auth} from "../../config/firebase-config";

interface Context {
  isLoggedIn: boolean;
  isLoading: boolean;
  uid: string;
  email: string | null;
}

const AuthenticationContext = React.createContext<Context>({
  isLoggedIn: false,
  isLoading: true,
  uid: "",
  email: null
})

export const useAuthenticationProvider = () => useContext(AuthenticationContext);

interface Props {
  children: React.ReactNode,
}

const AuthenticationProvider = ({children}: Props) => {

  const [checking, setChecking] = useState(true);
  const [uid, setUid] = useState<string>("_");
  const [email, setEmail] = useState<string | null>("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true)
        setChecking(false)
        setUid(user.uid);
        setEmail(user.email);
      } else {
        setIsLoggedIn(false)
      }
    })
  }, [setChecking, setIsLoggedIn, setUid, setEmail]);

  return (
    <AuthenticationContext.Provider
      value={{
        isLoggedIn,
        isLoading: checking,
        uid,
        email
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationProvider;
