import axios from 'axios';

const Axios = axios.create({
  baseURL: 'https://book.alitechbot.uz/api/',
  timeout: 10000
});

export default Axios;