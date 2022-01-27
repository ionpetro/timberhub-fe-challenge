import axios, { AxiosInstance, AxiosResponse } from 'axios';
import getConfig from 'next/config';

const {
  publicRuntimeConfig: { BACKEND_URL },
} = getConfig();

const instance: AxiosInstance = axios.create({ baseURL: BACKEND_URL });

// eslint-disable-next-line func-names
instance.interceptors.response.use(function (response: AxiosResponse) {
  return response.data;
});

export default instance;
