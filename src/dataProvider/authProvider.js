import axios from "axios";
const { REACT_APP_API_BASE_URL } = process.env;

const authProvider = {
  login: ({ email, password }) =>
    axios
      .post(`${REACT_APP_API_BASE_URL}/authentications/sign-in`, {
        email,
        password,
      })
      .then((res) => {
        const {
          data: { user, token },
        } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("currentUser", JSON.stringify(user));
        return Promise.resolve();
      }),
  logout: (params) => {
    localStorage.removeItem("token");
    return Promise.resolve();
  },
  checkAuth: (params) => {
    return localStorage.getItem("token") ? Promise.resolve() : Promise.reject();
  },
  checkError: (error) => {
    if (error.status === 401 || error.status === 403) {
      return Promise.reject();
    }
    return Promise.resolve();
  },
  getPermissions: (params) => Promise.resolve(),
};

export default authProvider;
