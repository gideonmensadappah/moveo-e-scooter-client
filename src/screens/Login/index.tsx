import { useContext } from "react";

import CostumModal from "../../components/Modal/index";
import LoginForm from "../../components/Forms/LoginForm";
import CostumTypography from "../../components/Typography/index";
import { authContext } from "../../contexts/AuthContext";

const LoginScreen = () => {
  const { auth } = useContext(authContext);

  return (
    <CostumModal modalState={!auth}>
      <CostumModal.Text children={Info} />
      <LoginForm />
    </CostumModal>
  );
};

export default LoginScreen;

const Info = (
  <CostumTypography type='description' textColor='text.tertiary'>
    Login.
  </CostumTypography>
);
