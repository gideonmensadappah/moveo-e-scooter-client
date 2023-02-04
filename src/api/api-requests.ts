import axios from "axios";
import { getItem } from "../utils/localStorage";
import { Req } from "../enums/req/req.enum";

const baseUrl: string = process.env.REACT_APP_SERVER_BASE_URL!;

export const POST = async <T>(path: string, body: unknown) => {
  const authHeaders = getAuthorizationHeaders();
  return await (
    await axios.post<T>(`${baseUrl}${path}`, body, authHeaders)
  ).data;
};

export const PUT = async <T>(path: string, body?: unknown) => {
  const authHeaders = getAuthorizationHeaders();
  return await (
    await axios.put<T>(`${baseUrl}${path}`, body, authHeaders)
  ).data;
};

export const GET = async <T>(path: string) => {
  const authHeaders = getAuthorizationHeaders();
  return await (
    await axios.get<T>(`${baseUrl}${path}`, authHeaders)
  ).data;
};

export const PATCH = async <T>(path: string, body?: unknown) => {
  const authHeaders = getAuthorizationHeaders();
  return await (
    await axios.patch<T>(`${baseUrl}${path}`, body, authHeaders)
  ).data;
};

export const DELETE = async <T>(path: string) => {
  const authHeaders = getAuthorizationHeaders();
  return await (
    await axios.delete<T>(`${baseUrl}${path}`, authHeaders)
  ).data;
};
const getAuthorizationHeaders = () => {
  const token = getItem(Req.token) ?? "";
  return {
    headers: { Authorization: `Bearer ${token}` },
  };
};
