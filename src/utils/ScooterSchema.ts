import { z } from "zod";

export const ScooterSchema = z.object({
  model: z.string().min(1, { message: "Must be 1 or more characters long" }),
  yearOfManufacture: z.string().min(1, { message: "Must select a date." }),
  latitude: z.string().min(1, { message: "Must type latitude" }),
  longitude: z.string().min(1, { message: "Must type  longitude" }),
});
