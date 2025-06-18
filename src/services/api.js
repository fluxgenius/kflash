import axios from 'axios'

const api = axios.create({
  baseURL: 'https://kflashsever.onrender.com/api',
})

// Auto-add token to headers
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default api
