import { Auth } from "aws-amplify";
import axios from "axios";

const baseUrl =
  process.env.NODE_ENV === "development"
    ? "https://firlk1bo2h.execute-api.us-west-2.amazonaws.com/dev/"
    : "https://arctic-con.com/api/";

axios.defaults.baseURL = baseUrl;

const actions = {
  GET(_, params) {
    if (params.authed) {
      return Auth.currentSession().then((user) => {
        const token = user.idToken.jwtToken;

        return axios
          .get(params.route, { headers: { Authorization: token } })
          .then((response) => response.data);
      });
    } else {
      return axios.get(params.route).then((response) => response.data);
    }
  },

  POST(_, params) {
    if (params.authed) {
      return Auth.currentSession().then((user) => {
        const token = user.idToken.jwtToken;

        axios
          .post(params.route, params.data, {
            headers: {
              Authorization: token,
              "Content-Type": "application/json",
            },
          })
          .then((response) => response.data);
      });
    } else {
      return axios
        .post(params.route, params.data)
        .then((response) => response.data);
    }
  },
};

export default { actions };
