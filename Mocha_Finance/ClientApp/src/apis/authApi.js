import axios from "axios";
import routes from "../routes";

const api = axios.create({
  baseURL: `${routes.base_root_url}/api/User/`
});

// `https://localhost:44379/api/User/Login2?e=${email}&p=${password}`
const authApi = {
  register: (email, password) => {
    return api.post(`Register?e=${email}&p=${password}`);
  },
  login: (email, password) => {
    return api.post(`Login?e=${email}&p=${password}`);
  },
  getMessage: (email, password) => {
    return api.get(`ValidateLogin?e=${email}&p=${password}`);
  }
};

export default authApi;
