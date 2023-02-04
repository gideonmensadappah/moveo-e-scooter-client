import { URLS } from "./api-urls";
import { POST, GET, DELETE, PATCH } from "./api-requests";
import { Response } from "../interfaces/api/response-interface";
import { User } from "../interfaces/User/user-interface";

export const usersLogin = async (
  user: Pick<User, "email" | "password">
): Promise<Response> => {
  const { data, status } = (await POST(`${URLS.AUTHENTICATE}/login`, {
    ...user,
  })) as any;
  return { data, status };
};
export const usersLogout = async (): Promise<Response> => {
  const { data, status } = (await GET(`${URLS.AUTHENTICATE}/logout`)) as any;
  return { data, status };
};
export const getUsers = async (): Promise<Response> => {
  const { data, status } = (await GET(`${URLS.USER}`)) as any;
  return { data, status };
};

export const getUser = async (id: string): Promise<Response> => {
  const { data, status } = (await GET(`${URLS.USER}/${id}`)) as any;
  return { data, status };
};

export const deleteUser = async (id: string): Promise<Response> => {
  const { data, status } = (await DELETE(`${URLS.USER}/${id}`)) as any;
  return { data, status };
};

export const createUser = async (user: Partial<User>): Promise<Response> => {
  const { data, status }: any = await POST(`${URLS.USER}`, {
    ...user,
  });
  return { data, status };
};

export const updateUser = async (User: User): Promise<Response> => {
  const { data, status }: any = await PATCH(`${URLS.USER}`, {
    ...User,
  });
  return { data, status };
};
