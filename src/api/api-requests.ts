import axios from "axios";
import baseUrl from "./base-url";
import { getItem } from "../utils/localStorage";
import { Req } from "../enums/req/req.enum";

let ip: string;

if (process.env.REACT_APP_STATE === "production") ip = baseUrl.production;
else ip = baseUrl.development;

export const POST = async <T>(url: string, body: unknown) => {
  const authHeaders = getAuthorizationHeaders();
  return await (
    await axios.post<T>(`${ip}${url}`, body, authHeaders)
  ).data;
};

export const PUT = async <T>(url: string, body?: unknown) => {
  const authHeaders = getAuthorizationHeaders();
  return await (
    await axios.put<T>(`${ip}${url}`, body, authHeaders)
  ).data;
};

export const GET = async <T>(url: string) => {
  const authHeaders = getAuthorizationHeaders();
  return await (
    await axios.get<T>(`${ip}${url}`, authHeaders)
  ).data;
};

export const PATCH = async <T>(url: string, body?: unknown) => {
  const authHeaders = getAuthorizationHeaders();
  return await (
    await axios.patch<T>(`${ip}${url}`, body, authHeaders)
  ).data;
};

export const DELETE = async <T>(url: string) => {
  const authHeaders = getAuthorizationHeaders();
  return await (
    await axios.delete<T>(`${ip}${url}`, authHeaders)
  ).data;
};
const getAuthorizationHeaders = () => {
  const token = getItem(Req.token) ?? "";
  return {
    headers: { Authorization: `Bearer ${token}` },
  };
};
