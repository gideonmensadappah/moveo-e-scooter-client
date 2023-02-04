import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Stack from "@mui/joy/Stack";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import CostumButton from "../Button";
import { User } from "../../interfaces/User/user-interface";
import { LoginUserSchema } from "../../utils/LoginUserSchema";
import CostumTypography from "../Typography";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { user_login } from "../../redux/user/user-actions";

const useFormInput = {
  defaultValues: {},
  resolver: zodResolver(LoginUserSchema),
};

type Inputs = Pick<User, "email" | "password">;

const LoginForm = () => {
  const dispatch = useAppDispatch();

  const { register, handleSubmit, formState } = useForm<Inputs>(useFormInput);
  const { errors } = formState;

  const onSubmit = (formValues: Inputs) => {
    dispatch(user_login(formValues));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input autoFocus {...register("email")} />
          <CostumTypography children={errors.email?.message} />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input type='password' autoFocus {...register("password")} />
          <CostumTypography children={errors.password?.message} />
        </FormControl>
        <CostumButton type='submit' children='Login' />
      </Stack>
    </form>
  );
};

export default LoginForm;
