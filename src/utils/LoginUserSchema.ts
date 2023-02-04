import { z } from "zod";

export const LoginUserSchema = z.object({
  email: z
    .string()
    .email()
    .min(1, { message: "Email Must be 1 or more characters long" }),
  password: z.string().min(1, { message: "Must be 1 or more" }),
});
