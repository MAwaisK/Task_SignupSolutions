import axios from 'axios';
import {dev} from '../Envoirnment/Environment';

const Api = axios.create({
  baseURL: dev.api,
  timeout: 3000,
});

export default Api;
