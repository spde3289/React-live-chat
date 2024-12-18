import { CommonResponse } from "@/type/common";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
export const getApiBase = () => import.meta.env.VITE_BASE_URL;

const client = axios.create({
  timeout: 3000,
  baseURL: getApiBase(),
  headers: {
    'Content-Type': 'application/json',
  },
});

client.interceptors.request.use(
  function (config) {
    if (config.headers === undefined) return config;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

client.interceptors.response.use(
  function (response) {
    // 응답을 받은 후 처리할 작업
    return response;
  },
  function (error) {
    // 응답 에러 처리
    return Promise.reject(error);
  }
);

export const Get = async <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<CommonResponse<T>>> => {
  const response = await client.get(url, config);

  return response;
};

export const Post = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<CommonResponse<T>>> => {
  const response = await client.post(url, data, config);

  return response;
};
export const Put = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<CommonResponse<T>>> => {
  const response = await client.put(url, data, config);

  return response;
};

export const Patch = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<CommonResponse<T>>> => {
  const response = await client.patch(url, data, config);

  return response;
};

export const Delete = async <T>(
  url: string,
  _data?: any,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<CommonResponse<T>>> => {
  const response = await client.delete(url, config);

  return response;
};

export default client;
