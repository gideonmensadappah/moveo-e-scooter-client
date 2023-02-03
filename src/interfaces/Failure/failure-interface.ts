import { FailureStatus, Type } from "../../enums/failure/failure.enum";

export interface Failure {
  _id: string;
  scooter_id: string;
  type: Type;
  status: FailureStatus;
  openingTime: Date;
  closingTime: Date;
}
