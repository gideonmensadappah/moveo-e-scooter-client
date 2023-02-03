import { z } from "zod";

export const ParkingSchema = z.object({
  address: z.string().min(1, { message: "Must be 1 or more characters long" }),
  amountOfScootersAvailabile: z
    .string()
    .min(1, { message: "Must be 1 or more" }),
  latitude: z.string().min(1, { message: "Must be 1 or more" }),
  longitude: z.string().min(1, { message: "Must be 1 or more" }),
});
