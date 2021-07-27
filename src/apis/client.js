import axios from 'axios';

const client = axios.create({
  // baseURL: 'http://3.37.63.30',
  baseURL: 'http://localhost:8080',
});

client.interceptors.request.use(
  (config) => {
    let aToken = localStorage.getItem('aToken');
    if (aToken) {
      config.headers.Authorization = `Bearer ${aToken}`;
    } else {
      console.log('Token이 존재하지 않음 -> 로그인 필요');
    }
    console.log(config.headers);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default client;
