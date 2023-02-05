import { URLS } from "./api-urls";
import { POST, GET, DELETE, PATCH } from "./api-requests";
import { Response } from "../interfaces/api/response-interface";
import { Scooter } from "../interfaces/Sooter/scooter-interface";
import { Status } from "../enums/scooter/scooter.enum";

export const getScooters = async (): Promise<Response> => {
  const { data, status } = (await GET(`${URLS.Scooter}`)) as any;
  return { data, status };
};

export const getScooter = async (id: string): Promise<Response> => {
  const { data, status } = (await GET(`${URLS.Scooter}/${id}`)) as any;
  return { data, status };
};
export const getFilteredScootersByActive = async (
  scooter_status: Status
): Promise<Response> => {
  const { data, status } = (await GET(
    `${URLS.Scooter}/status?status=${scooter_status}`
  )) as any;
  return { data, status };
};

export const deleteScooter = async (id: string): Promise<Response> => {
  const { data, status } = (await DELETE(`${URLS.Scooter}/${id}`)) as any;
  return { data, status };
};

export const createScooter = async (
  parking: Partial<Scooter>
): Promise<Response> => {
  console.log(parking);
  const { data, status }: any = await POST(`${URLS.Scooter}`, {
    ...parking,
  });
  return { data, status };
};

export const updateScooter = async (scooter: Scooter): Promise<Response> => {
  const { data, status }: any = await PATCH(`${URLS.Scooter}`, {
    ...scooter,
  });
  return { data, status };
};
