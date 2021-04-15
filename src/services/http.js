import axios from "axios";

axios.defaults.baseURL = "https://shoesclimate.herokuapp.com";
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("AUTH_TOKEN")}`;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default axios 
 
