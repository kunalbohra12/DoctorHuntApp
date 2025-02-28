import axios from 'axios';
const API_BASE_URL = 'http://127.0.0.1:8090/api/collections/users/auth-with-password';
const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});
apiClient.interceptors.request.use(
    async (config) => {
        const token = '';
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);
export default apiClient;


