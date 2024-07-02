"use client";

import axios, { AxiosError } from 'axios';
import toast from 'react-hot-toast';
import { useAuthToken } from './userAuthToken';

const service = axios.create({
  baseURL: "http://localhost:8080/api/v1",
  timeout: 5000
});

service.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "application/json";

    if (typeof window !== 'undefined' && window.localStorage) {
      const { getToken } = useAuthToken();
      const token = getToken();
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {

    if (![200, 201, 202, 203, 204].includes(response.status)) {
      const { data } = response;
      return Promise.reject(new Error(data.message || 'Error'));
    } else {
      return response;
    }
  },
  (error: AxiosError) => {
    // console.error('Error:', error);

    const responseData: any = error?.response?.data;
    const err = responseData?.error || responseData?.message || error.message;
    toast.error("Error: " + err);

    return Promise.reject(error);
  }
);

export default service;