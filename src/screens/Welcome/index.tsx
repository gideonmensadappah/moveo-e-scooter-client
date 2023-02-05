import { authContext } from "../../contexts/AuthContext/index";
import { useContext } from "react";

const MainContent = () => {
  const { auth } = useContext(authContext);
  return <div className='main'>Welcome {auth?.username ?? "User"}!</div>;
};

export default MainContent;
