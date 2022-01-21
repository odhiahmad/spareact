import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { getToken } from "../utils/cookie";
let instance: any = axios;

const initialHeader = {
  "Content-Type": "application/json",
  Authorization: "",
};

export function setUpAxios() {
  instance.interceptors.request.use((req: AxiosRequestConfig) => {
    return req;
  });
  instance.interceptors.response.use((res: AxiosResponse) => {
    console.log(res);

    return res;
  });
}

export default function APIKit(config: AxiosRequestConfig) {
  const baseURL = "http://localhost:3000/api";

  const headers = {
    ...initialHeader,
  };

  headers.Authorization = getToken();

  const finalConfig = {
    baseURL,
    headers,
    ...config,
  };
  return instance.request(finalConfig);
}
