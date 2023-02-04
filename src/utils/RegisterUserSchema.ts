import { z } from "zod";

export const RegisterUserSchema = z.object({
  username: z.string().min(1, { message: "user name Must be 1 or more" }),
  firstName: z.string().min(1, { message: "first name Must be 1 or more" }),
  lastName: z.string().min(1, { message: "last name Must be 1 or more" }),
  email: z
    .string()
    .email()
    .min(1, { message: "Must be 1 or more characters long" }),
  password: z.string().min(1, { message: "Must be 1 or more" }),
});
