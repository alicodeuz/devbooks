import axios from 'axios';
import store from '../store';
import { CLEAR_USER } from '../store/actionTypes';

const Axios = axios.create({
  baseURL: '/api/',
  timeout: 30000
});

Axios.interceptors.request.use((configs) => {
  const token = store.getState().user.token || localStorage.getItem('token') || '';
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
    store.dispatch({ type: CLEAR_USER });
    // window.location.href = '/sign-in';
  }
  return Promise.reject(err)
});


export default Axios;