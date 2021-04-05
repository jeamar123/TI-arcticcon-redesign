import Amplify, { Auth } from "aws-amplify";
import config from "../../../public/config.json";
import router from "../../router/index";

Amplify.configure({
  Auth: {
    region: "us-west-2",
    userPoolId: config.userPoolId,
    userPoolWebClientId: config.userPoolWebClientId,
    authenticationFlowType: "USER_PASSWORD_AUTH",
  },
});

const state = {
  userName: "",
};

const getters = {
  getUserName: (state) => state.userName,
};

const mutations = {
  setUserName(state, payload) {
    state.userName = payload;
  },
};

const actions = {
  signIn: function ({ commit }, creds) {
    return new Promise((resolve, reject) => {
      Auth.signIn(creds.username, creds.password)
        .then((user) => {
          let token = user.signInUserSession.idToken.jwtToken;
          this.$axios.defaults.headers.common["Authorization"] = token;
          commit("setUserName", user.username);
          resolve(user);
        })
        .catch((err) => {
          commit("setUserName", "");
          localStorage.clear();
          reject(err);
        });
    });
  },
  signUp: function (_, creds) {
    return new Promise((resolve, reject) => {
      Auth.signUp({
        username: creds.username,
        password: creds.password,
        attributes: {
          email: creds.email,
        },
        validationData: [],
      })
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  confirmSignUp: function (_, creds) {
    return new Promise((resolve, reject) => {
      Auth.confirmSignUp(creds.username, creds.code, {
        forceAliasCreation: true,
      })
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  resendSignUp: function (_, creds) {
    return new Promise((resolve, reject) => {
      Auth.resendSignUp(creds.username)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  getCurrentToken() {
    return new Promise((resolve, reject) => {
      Auth.currentSession()
        .then((user) => {
          // store.dispatch('updateUser', user.idToken.payload['cognito:username'])
          let token = user.idToken.jwtToken;
          this.$axios.defaults.headers.common["Authorization"] = token;
          resolve(token);
        })
        .catch((err) => {
          localStorage.clear();
          reject(err);
        });
    });
  },
  obtainToken(_, creds) {
    return new Promise((resolve, reject) => {
      Auth.signIn(creds.username, creds.password)
        .then((user) => {
          if (user.challengeName === "NEW_PASSWORD_REQUIRED") {
            router.push({
              name: "CompleteNewPassword",
              params: {
                id: creds.username.toLowerCase(),
                password: creds.password,
              },
              query: creds.query,
            });
          } else {
            let token = user.signInUserSession.idToken.jwtToken;
            this.$axios.defaults.headers.common["Authorization"] = token;
            resolve(token);
          }
        })
        .catch((err) => {
          localStorage.clear();
          reject(err);
        });
    });
  },
  getCurrentAuthedUser: function () {
    return new Promise((resolve, reject) => {
      Auth.currentAuthenticatedUser()
        .then((user) => {
          resolve(user);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  getCurrentUser: function ({ commit }) {
    return new Promise((resolve, reject) => {
      Auth.currentSession()
        .then((user) => {
          commit("setUserName", user.idToken.payload["cognito:username"]);
          resolve(user.idToken.payload["cognito:username"]);
        })
        .catch((err) => {
          commit("setUserName", "");
          reject(err);
        });
    });
  },
  getCurrentUserGroups: function () {
    return new Promise((resolve, reject) => {
      Auth.currentSession()
        .then((user) => {
          resolve(user.idToken.payload["cognito:groups"]);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  signOut({ commit }) {
    return new Promise((resolve, reject) => {
      Auth.signOut()
        .then((data) => {
          commit("setUserName", "");
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  changePassword(_, params) {
    return new Promise((resolve, reject) => {
      Auth.currentAuthenticatedUser().then((user) => {
        Auth.changePassword(user, params.oldPassword, params.newPassword)
          .then(() => {
            router.push("/login");
          })
          .catch((err) => {
            localStorage.clear();
            reject(err);
          });
      });
    });
  },
  completeNewPassword: function (_, params) {
    return new Promise((resolve, reject) => {
      Auth.signIn(params.username, params.oldPassword)
        .then((user) => {
          if (user.challengeName === "NEW_PASSWORD_REQUIRED") {
            Auth.completeNewPassword(user, params.newPassword, {
              name: params.name,
              email: params.email,
              phone_number: params.number,
            })
              .then(() => {
                router.push("/");
              })
              .catch((err) => {
                reject(err);
              });
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  forgotPassword: function (_, params) {
    return new Promise((resolve, reject) => {
      Auth.forgotPassword(params)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  forgotPasswordSubmit: function (_, params) {
    return new Promise((resolve, reject) => {
      Auth.forgotPasswordSubmit(params.username, params.code, params.password)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

export default { state, getters, mutations, actions };
