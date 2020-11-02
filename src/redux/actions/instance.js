import axios from "axios";

const instance = axios.create({
  baseURL: "https://cpes-project-backend.herokuapp.com/api/",
});
export default instance;
