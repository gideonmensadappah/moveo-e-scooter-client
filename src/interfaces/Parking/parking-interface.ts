export interface Parking {
  _id: string;
  scooters_id: Array<string>;
  address: string;
  amountOfScootersAvailabile: number;
  location: Location;
}

export interface Location {
  latitude: number;
  longitude: number;
}
