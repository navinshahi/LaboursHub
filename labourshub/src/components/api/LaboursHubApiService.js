import { apiClient } from "./ApiClient";

//For Labours

export const getLabourByUsername = (username) => apiClient.get(`labour/${username}`,username);

export const getAllLaboursByCityAndCategory = (city,category) => apiClient.get(`labour/category/${city}/${category}`,city,category);

export const getAllLaboursByCity = (city) => apiClient.get(`labour/city/${city}`,city);

export const registerLabour = (labourEntity) => apiClient.post(`labour/register`,labourEntity);

export const updateLabour = (labourEntity) => apiClient.put(`labour/update`,labourEntity);

export const getNumberOfLabours = () => apiClient.get(`labour/count`);

export const getNumberOfCities = () => apiClient.get(`labour/count/city`);

//For Users

export const getUserByUsername = (username) => apiClient.get(`user/${username}`,username);

export const registerUser = (userEntity) => apiClient.post(`user/register`,userEntity);

export const updateUser = (userEntity) => apiClient.put(`user/update`,userEntity);
