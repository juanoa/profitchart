import React, {useContext, useEffect, useState} from 'react';
import {auth} from "../../config/firebase-config";
import {useLogin} from "../../application";
import {Optional} from "../../domain/entities/Optional";
import {User} from "../../domain/entities/authentication/User";

interface Context {
  isLoggedIn: boolean;
  isLoading: boolean;
  user: Optional<User>;
  onLogin: (email: string, password: string) => void;
}

const AuthenticationContext = React.createContext<Context>({
  isLoggedIn: false,
  isLoading: true,
  user: {email: "", uid: ""},
  onLogin: () => {
  },
})

export const useAuthenticationContext = () => useContext(AuthenticationContext);

interface Props {
  children: React.ReactNode,
}

const AuthenticationProvider = ({children}: Props) => {

  const [checking, setChecking] = useState(true);
  const [user, setUser] = useState<User>();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useLogin();

  const setLoggedUser = (user: Optional<User>) => {
    if (user) {
      setIsLoggedIn(true);
      setUser(user);
    } else {
      setIsLoggedIn(false);
    }
  }

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setLoggedUser({uid: user.uid, email: user.email || ""})
      } else {
        setLoggedUser(null);
      }
      setChecking(false);
    })
  }, []);

  const onLogin = (email: string, password: string) => {
    setChecking(true);
    login(email, password)
      .then(user => {
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
        user,
        onLogin,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationProvider;
