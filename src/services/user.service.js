/* eslint-disable class-methods-use-this */
import axios from 'axios';
import authHeader from './auth-header';
import { API_URL_TEST } from '../const';

class UserService {
  getPublicContent() {
    return axios.get(`${API_URL_TEST}/all`);
  }

  getUserBoard() {
    return axios.get(`${API_URL_TEST}/user`, { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(`${API_URL_TEST}/mod`, { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(`${API_URL_TEST}/admin`, { headers: authHeader() });
  }
}

export default new UserService();
