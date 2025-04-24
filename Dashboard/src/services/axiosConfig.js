import axiosInstance from './config';

// (GET, POST, PUT, DELETE)
const getRequest = async (url, config = {}) => {
  const response = await axiosInstance.get(url, config);
  return response.data;
};

const postRequest = async (url, data, config = {}) => {
  const response = await axiosInstance.post(url, data, config);
  return response.data;
};

const putRequest = async (url, data, config = {}) => {
  const response = await axiosInstance.put(url, data, config);
  return response.data;
};

const deleteRequest = async (url, config = {}) => {
  const response = await axiosInstance.delete(url, config);
  return response.data;
};

// Exporting
export { getRequest, postRequest, putRequest, deleteRequest };
