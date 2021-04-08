import axios from 'axios'

axios.defaults.baseURL = "http://172.20.10.2:4000"
axios.defaults.headers["Authorization"] = `Bearer ${localStorage.getItem("AUTH_TOKEN")}`
axios.defaults.headers["Content-Type"] = "application/x-www-form-urlencoded"

export default axios 
