import axios from 'axios';

const ax = axios.create({
    baseURL: import.meta.env.REACT_APP_API_BASE_URL
})

export default ax