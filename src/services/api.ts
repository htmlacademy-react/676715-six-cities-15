import axios, {AxiosInstance, AxiosResponse, AxiosError} from 'axios';
import { getToken } from './token';
import { StatusCodeMapping } from '../const';
// import { processErrorHandle } from './process-error-handle';
import {toast} from 'react-toastify';

type DetailMessageType = {
  type: string;
  message: string;
}

const BASE_URL = 'https://15.design.htmlacademy.pro/six-cities';
const REQUEST_TIMEOUT = 5000;

const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['X-Token'] = token;
      }

      return config;
    },
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<DetailMessageType>) => {
      if (error.response && shouldDisplayError(error.response)) {
        const detailMessage = (error.response.data);

        // processErrorHandle(detailMessage.message);
        toast.warn(detailMessage.message);
      }

      throw error;
    }
  );

  return api;
};
