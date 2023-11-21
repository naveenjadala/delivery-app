import axios from 'axios';
import endpoints from './endpoints';
import { retrieveData } from '../storage';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Alert } from 'react-native';
// import Config from 'react-native-config';

// const API_URL = Config.API_URL;

const apiClient = axios.create({
  baseURL: 'http://localhost:8000/api/',
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
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

// interface loginData {
//   email: string;
//   password: string;
// }

interface restaurants {
  name: string;
  location: string;
}

// type signUpProps = {
//   username: string;
//   email: string;
//   password: string;
// };

const login = async (endpoint: string, data: string): Promise<any> => {
  try {
    const response = await apiClient.post(`${endpoints[endpoint]}`, data);
    return response.data;
  } catch (error: any) {
    throw new Error(`API request to ${endpoint} failed${error.message}`);
  }
};

const signUp = async (endpoint: string, data: string): Promise<any> => {
  try {
    const response = await apiClient.post(`${endpoints[endpoint]}`, data);
    return response.data;
  } catch (error: any) {
    throw new Error(`API request to ${endpoint} failed${error.message}`);
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

const getAllRestaurants = createAsyncThunk(
  'restaurants/fetchAll',
  async (endpoint: string) => {
    try {
      const response = await apiClient.get(`${endpoints[endpoint]}`);
      return response.data.restaurants;
    } catch (error: any) {
      Alert.alert('Api filed', error);
      return Promise.reject(
        error.message || 'An error occured will fetching the data',
      );
    }
  },
);

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

export {
  login,
  signUp,
  getAllUsers,
  getRestaurants,
  saveRestaurants,
  getAllRestaurants,
};
