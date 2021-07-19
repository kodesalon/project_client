import axios from 'axios';

const client = axios.create({
  // baseURL: 'http://3.37.63.30',
  baseURL: 'http://localhost:8080',
});

export default client;
