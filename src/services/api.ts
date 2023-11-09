import axios from 'axios';
import endpoints from './endpoints';
import {retrieveData} from '../storage';

const API_URL = 'http://localhost:8000/api/';

const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  async function (config) {
    if (config.url !== '/user/login') {
      const token = await retrieveData('token');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

interface loginData {
  email: string;
  password: string;
}

interface restaurants {
  name: string;
  location: string;
}

const login = async (endpoint: string, data: string): Promise<any> => {
  try {
    const response = await apiClient.post(`${endpoints[endpoint]}`, data);
    return response.data;
  } catch (error: any) {
    throw new Error(`API request to ${endpoint} failed${error.message}`);
  }
};

const signUp = async (endpoint: string, data: loginData): Promise<any> => {
  try {
    const response = await apiClient.post(`/${endpoints[endpoint]}`, data);
    return response;
  } catch (error) {
    throw new Error('API request to ${endpoint} failed${error.message}');
  }
};

const getAllUsers = async (endpoint: string) => {
  try {
    const response = await apiClient.get(`${endpoints[endpoint]}`);
    return response.data;
  } catch (error: any) {
    throw new Error(`API request for ${endpoint} failed with ${error.message}`);
  }
};

const getRestaurants = async (endpoint: string) => {
  try {
    const response = await apiClient.get(`${endpoints[endpoint]}`);
    return response.data.restaurants;
  } catch (error: any) {
    console.log(`API request for ${endpoint} failed with ${error}`);
    // throw new Error(`API request for ${endpoint} failed with ${error}`);
  }
};

const saveRestaurants = async (endpoint: string, data: restaurants) => {
  try {
    const response = await apiClient.post(`${endpoints[endpoint]}`, data);
    return response.data;
  } catch (error: any) {
    throw new Error(`API request to ${endpoint} failed${error.message}`);
  }
};

export {login, signUp, getAllUsers, getRestaurants, saveRestaurants};
