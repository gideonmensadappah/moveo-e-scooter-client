import { User } from "../interfaces/User/user-interface";

/** Return user auth from local storage value */
export const getStoredUserAuth = (): User | null => {
  const auth = window.localStorage.getItem("userAuth");
  if (auth) {
    return JSON.parse(auth);
  }
  return null;
};
