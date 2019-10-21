import axios from "axios";
import routes from "../routes";

const api = axios.create({
  baseURL: `${routes.base_root_url}/api/User/`
});

// `https://localhost:44379/api/User/Login2?e=${email}&p=${password}`
const authApi = {
  register: (email, password) => {
    return api.post(`Login`, {
      email,
      password
    });
  }
};

export default authApi;
