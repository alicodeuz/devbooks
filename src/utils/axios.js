import axios from 'axios';

const Axios = axios.create({
  baseURL: '/api/',
  timeout: 10000
});

export default Axios;