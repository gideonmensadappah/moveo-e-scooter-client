import { FC, ReactNode, createContext, useEffect } from "react";

import { getStoredUserAuth } from "../../utils/getStoredUserAuth";
import useAuthHandler from "../../hooks/useAuthHandler";
import { User } from "../../interfaces/User/user-interface";

interface IAuthContextInterface {
  auth: User | null;
  setAuthStatus: (userAuth: User) => void;
  setUnauthStatus: () => void;
}

type AuthProviderType = {
  children: ReactNode;
};

export const authContext = createContext<IAuthContextInterface>({
  auth: null,
  setAuthStatus: () => {},
  setUnauthStatus: () => {},
});

const { Provider } = authContext;

const AuthProvider: FC<AuthProviderType> = ({ children }) => {
  const { auth, setAuthStatus, setUnauthStatus } = useAuthHandler(
    getStoredUserAuth()
  );

  const value = { auth, setAuthStatus, setUnauthStatus };
  return <Provider value={value}>{children}</Provider>;
};
export default AuthProvider;
