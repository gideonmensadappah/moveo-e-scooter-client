import { Inputs } from "../components/Forms/ParkingForm";
import { Parking } from "../interfaces/Parking/parking-interface";

export const formValuesMapParkingStructure = (formValues: Inputs): Parking => ({
  ...formValues,
  amountOfScootersAvailabile: +formValues.amountOfScootersAvailabile,
  location: {
    latitude: +formValues.latitude,
    longitude: +formValues.longitude,
  },
});
