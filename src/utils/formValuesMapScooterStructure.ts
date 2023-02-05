import { Inputs } from "../components/Forms/ScooterForm";
import { Scooter } from "../interfaces/Sooter/scooter-interface";

export const formValuesMapScooterStructure = (formValues: Inputs): Scooter => ({
  ...formValues,
  yearOfManufacture: new Date(formValues.yearOfManufacture),
  currentLocation: {
    latitude: +formValues.latitude,
    longitude: +formValues.longitude,
  },
});
