import React, {useContext, useEffect, useState} from 'react';
import {auth} from "../../config/firebase-config";
import {useLogin} from "../../application";
import {User} from "firebase/auth";

interface Context {
  isLoggedIn: boolean;
  isLoading: boolean;
  uid: string;
  email: string | null;
  onLogin: (email: string, password: string) => void;
}

const AuthenticationContext = React.createContext<Context>({
  isLoggedIn: false,
  isLoading: true,
  uid: "",
  email: null,
  onLogin: () => {
  },
})

export const useAuthenticationContext = () => useContext(AuthenticationContext);

interface Props {
  children: React.ReactNode,
}

const AuthenticationProvider = ({children}: Props) => {

  const [checking, setChecking] = useState(true);
  const [uid, setUid] = useState<string>("_");
  const [email, setEmail] = useState<string | null>("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useLogin();

  const setLoggedUser = (user: User | null) => {
    if (user) {
      setIsLoggedIn(true);
      setUid(user.uid);
      setEmail(user.email);
    } else {
      setIsLoggedIn(false);
    }
  }

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setLoggedUser(user);
      setChecking(false);
    })
  }, []);

  const onLogin = (email: string, password: string) => {
    setChecking(true);
    login(email, password)
      .then(({user}) => {
        setLoggedUser(user);
      })
      .catch(() => {
        // dispatch(setToast('User or password are wrong', 'error'))
      })
      .finally(() => {
        setChecking(false);
      })
  }

  return (
    <AuthenticationContext.Provider
      value={{
        isLoggedIn,
        isLoading: checking,
        uid,
        email,
        onLogin,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationProvider;
