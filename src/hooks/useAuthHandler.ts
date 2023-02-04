import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { User } from "../interfaces/User/user-interface";
import { userSelector } from "../redux/user/user-selector";
import { getStoredUserAuth } from "../utils/getStoredUserAuth";

const useAuthHandler = (initialState: User | null) => {
  const isLoggedIn = useSelector(userSelector);

  const [auth, setAuth] = useState<User | null>(initialState);

  useEffect(() => {
    if (isLoggedIn && !auth) {
      const user = getStoredUserAuth();
      setAuthStatus(user!);
    }
  }, [isLoggedIn]);

  const setAuthStatus = (user: User) => {
    window.localStorage.setItem("userAuth", JSON.stringify(user));
    setAuth(user);
  };

  const setUnauthStatus = () => {
    window.localStorage.clear();
    setAuth(null);
  };

  return {
    auth,
    setAuthStatus,
    setUnauthStatus,
  };
};
export default useAuthHandler;
