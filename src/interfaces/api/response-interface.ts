import { Req } from "../../enums/req/req.enum";

export interface Response {
  data: unknown;
  status: Req;
}
