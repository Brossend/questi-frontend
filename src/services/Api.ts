import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://62.109.12.77:8080/api/v1/',
});

export default axiosInstance;
