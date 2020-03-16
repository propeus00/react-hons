import Axios from "axios";

const proxyurl = "https://cors-anywhere.herokuapp.com/";
const instance = Axios.create({
  baseURL: proxyurl + "https://apihons.azurewebsites.net/api/"
});

//instance.defaults.headers.common['Authorization'] = "AUTH TOKEN from instance";

export default instance;
