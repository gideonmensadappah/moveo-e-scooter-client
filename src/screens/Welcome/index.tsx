import { authContext } from "../../contexts/AuthContext/index";
import { useContext } from "react";
import { ContentWrapper } from "../../components/Layout/ContentWrapper/index";

const MainScreen = () => {
  const { auth } = useContext(authContext);
  return <ContentWrapper>Welcome {auth?.username ?? "User"}!</ContentWrapper>;
};

export default MainScreen;
