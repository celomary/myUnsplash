import axios from 'axios';

const myAxios = axios.create({
    baseURL: 'https://unsplashbackend-production.up.railway.app',
});

export default myAxios;