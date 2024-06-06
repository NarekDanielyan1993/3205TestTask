import axios, { AxiosRequestConfig, Method } from 'axios';

export const axiosInstance = axios.create({
    baseURL: process.env.SERVER_BASE_URL as string,
    timeout: 30000,
});

export const axiosRequest = async <T>(
    method: Method,
    url: string,
    data: T,
    options?: AxiosRequestConfig
): Promise<T> => {
    const requestOptions: AxiosRequestConfig = {
        ...options,
    };

    if (method.toLowerCase() === 'get') {
        requestOptions.params = data;
    } else {
        requestOptions.data = data;
    }
    return (axiosInstance as any)[method](url, data, requestOptions);
};
