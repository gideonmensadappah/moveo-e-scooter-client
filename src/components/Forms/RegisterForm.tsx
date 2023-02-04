import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Stack from "@mui/joy/Stack";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import CostumButton from "../Button";
import { User } from "../../interfaces/User/user-interface";
import { RegisterUserSchema } from "../../utils/RegisterUserSchema";
import CostumTypography from "../Typography";

const useFormInput = {
  defaultValues: {},
  resolver: zodResolver(RegisterUserSchema),
};

const RegisterForm = () => {
  const { register, handleSubmit, formState } = useForm<User>(useFormInput);
  const { errors } = formState;

  const onSubmit = (formValues: User) => {
    console.log({ formValues });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input autoFocus {...register("username")} />
          <CostumTypography children={errors.username?.message} />
        </FormControl>
        <FormControl>
          <FormLabel>First Name</FormLabel>
          <Input autoFocus {...register("firstName")} />
          <CostumTypography children={errors.firstName?.message} />
        </FormControl>
        <FormControl>
          <FormLabel>Last Name</FormLabel>
          <Input autoFocus {...register("lastName")} />
          <CostumTypography children={errors.lastName?.message} />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input autoFocus {...register("email")} />
          <CostumTypography children={errors.email?.message} />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input autoFocus {...register("password")} />
          <CostumTypography children={errors.password?.message} />
        </FormControl>
        <CostumButton type='submit' children={"Submit"} />
      </Stack>
    </form>
  );
};

export default RegisterForm;
