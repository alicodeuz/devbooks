import axios from 'axios';

const Axios = axios.create({
  baseURL: '/api/',
  timeout: 10000
});

Axios.interceptors.request.use((configs) => {
  const token = localStorage.getItem('token');
  configs.headers.Authorization = token ? `Berear ${token}` : '';
  configs.headers.language = 'uz';
  return configs;
}, (err) => {
  console.log(err)
});

Axios.interceptors.response.use((response) => {
  return response;
}, (err) => {
  console.log(err.response);
  if (err.response.status === 401) {
    localStorage.clear();
    window.location.href = '/sign-in';
  }
});


export default Axios;