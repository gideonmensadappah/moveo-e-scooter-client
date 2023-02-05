import { FC } from "react";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Stack from "@mui/joy/Stack";
import { useForm, SubmitHandler, useController } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import CostumTypography from "../Typography";
import { Location } from "../../interfaces/Parking/parking-interface";
import { useAppDispatch } from "../../hooks/useAppDispatch";

import CostumButton from "../Button/index";
import { Scooter } from "../../interfaces/Sooter/scooter-interface";
import { ScooterSchema } from "../../utils/ScooterSchema";
import { formValuesMapScooterStructure } from "../../utils/formValuesMapScooterStructure";
import { create_scooter } from "../../redux/scooter/scooter-actions";
import CostumSelect from "../Select/index";
import { Status } from "../../enums/scooter/scooter.enum";

export type Inputs = Omit<Scooter, "currentLocation"> & Location;

export const selectOptions = [
  { label: Status.ACTIVE, value: Status.ACTIVE },
  { label: Status.AVAILABLE, value: Status.AVAILABLE },
  { label: Status.BROKEN, value: Status.BROKEN },
  { label: Status.CHARGED, value: Status.CHARGED },
  { label: Status.HANDLED, value: Status.HANDLED },
];
type Props = {
  handleCloseModal: () => void;
};
const useFormInput = {
  defaultValues: {},
  resolver: zodResolver(ScooterSchema),
};

const ScooterForm: FC<Props> = ({ handleCloseModal }) => {
  const dispatch = useAppDispatch();

  const { register, handleSubmit, formState, control } =
    useForm<Inputs>(useFormInput);
  const { field } = useController({ name: "status", control });

  const { errors } = formState;

  const handleSelectChange = (option: React.ChangeEvent<HTMLSelectElement>) => {
    field.onChange(option.target.value);
  };
  const onSubmit: SubmitHandler<Inputs> = (formValues) => {
    const payload = formValuesMapScooterStructure({
      ...formValues,
      status: field.value,
    });

    dispatch(create_scooter(payload));
    handleCloseModal();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <FormControl>
          <FormLabel>Model</FormLabel>
          <Input {...register("model")} />
          <CostumTypography children={!errors.model?.message} />
        </FormControl>

        <FormControl>
          <FormLabel>Year Of Manufacture</FormLabel>
          <Input type='date' {...register("yearOfManufacture")} />
          <CostumTypography children={errors.yearOfManufacture?.message} />
        </FormControl>

        <>
          <CostumSelect
            options={selectOptions}
            value={field.value}
            handleChange={handleSelectChange}
          />
          <CostumTypography children={errors.status?.message} />
        </>

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
      <CostumButton type='submit' children='Create' />
    </form>
  );
};

export default ScooterForm;
