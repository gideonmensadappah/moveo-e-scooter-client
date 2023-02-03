import { URLS } from "./api-urls";
import { POST, GET, DELETE, PATCH } from "./api-requests";
import { Response } from "../interfaces/api/response-interface";
import { Parking } from "../interfaces/Parking/parking-interface";

export const getParkings = async (): Promise<Response> => {
  const { data, status } = (await GET(`${URLS.PARKING}`)) as any;
  return { data, status };
};

export const getParking = async (id: string): Promise<Response> => {
  const { data, status } = (await GET(`${URLS.PARKING}/${id}`)) as any;
  return { data, status };
};

export const deleteParking = async (id: string): Promise<Response> => {
  const { data, status } = (await DELETE(`${URLS.PARKING}/${id}`)) as any;
  return { data, status };
};

export const createParking = async (
  parking: Partial<Parking>
): Promise<Response> => {
  console.log(parking);
  const { data, status }: any = await POST(`${URLS.PARKING}`, {
    ...parking,
  });
  return { data, status };
};

export const updateParking = async (Parking: Parking): Promise<Response> => {
  const { data, status }: any = await PATCH(`${URLS.PARKING}`, {
    ...Parking,
  });
  return { data, status };
};
