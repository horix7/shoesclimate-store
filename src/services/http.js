import axios from "axios";

axios.defaults.baseURL = "http://206.189.232.135:4000";
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("AUTH_TOKEN")}`;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default axios 
 