import { Status } from "../../enums/scooter/scooter.enum";
import { Location } from "../Location/location-interface";

export interface Scooter {
  _id: string;
  currentLocation: Location;
  model: any;
  yearOfManufacture: Date;
  status: Status;
}
