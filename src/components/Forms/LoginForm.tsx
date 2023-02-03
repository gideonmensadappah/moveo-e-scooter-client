


import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Stack from "@mui/joy/Stack";

const LoginForm = () => {
  return (
    <form
      onSubmit={(event) => {
        //   event.preventDefault();
        //   setOpen(false);
      }}
    >
      <Stack spacing={2}>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input autoFocus required />
        </FormControl>
        <FormControl>
          <FormLabel>Description</FormLabel>
          <Input required />
        </FormControl>
      </Stack>
    </form>
  );
};

export default LoginForm;
