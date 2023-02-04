import { FC } from "react";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Stack from "@mui/joy/Stack";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import CostumTypography from "../Typography";
import { Parking, Location } from "../../interfaces/Parking/parking-interface";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { create_parking } from "../../redux/parking/parking-actions";

import { formValuesMapParkingStructure } from "../../utils/formValuesMapParkingStructure";
import { ParkingSchema } from "../../utils/ParkingSchema";
import CostumButton from "../Button/index";

export type Inputs = Omit<Parking, "location"> & Location;
type Props = {
  handleCloseModal: () => void;
};
const useFormInput = {
  defaultValues: {},
  resolver: zodResolver(ParkingSchema),
};

const ParkingForm: FC<Props> = ({ handleCloseModal }) => {
  const dispatch = useAppDispatch();

  const { register, handleSubmit, formState } = useForm<Inputs>(useFormInput);
  const { errors } = formState;

  const onSubmit: SubmitHandler<Inputs> = (formValues) => {
    dispatch(create_parking(formValuesMapParkingStructure(formValues)));
    handleCloseModal();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <FormControl>
          <FormLabel>Address</FormLabel>
          <Input autoFocus {...register("address")} />
          <CostumTypography children={errors.address?.message} />
        </FormControl>

        <FormControl>
          <FormLabel>Number of scooters that can be parked</FormLabel>
          <Input type='number' {...register("amountOfScootersAvailabile")} />
          <CostumTypography
            children={errors.amountOfScootersAvailabile?.message}
          />
        </FormControl>

        <CostumTypography type='title'>Location</CostumTypography>

        <FormControl>
          <FormLabel>Latitude</FormLabel>
          <Input type='number' {...register("latitude")} />
          <CostumTypography children={errors.latitude?.message} />
        </FormControl>

        <FormControl>
          <FormLabel>Longitude</FormLabel>
          <Input type='number' {...register("longitude")} />
          <CostumTypography children={errors.longitude?.message} />
        </FormControl>
      </Stack>
      <br />
      <CostumButton type='submit' children={"Submit"} />
    </form>
  );
};

export default ParkingForm;
