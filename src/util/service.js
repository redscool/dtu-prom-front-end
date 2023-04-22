import axios from "axios";
import config from "../config.json";

const AUTH_SERVER = config.AUTH_SERVER;

export const request = async (method, route, body, onSuccess, onError) => {
  const token = localStorage.getItem("auth_token");

  const config = {
    headers: {
      Authorization: [token],
    },
  };

  if (method === "get") {
    body = config;
  }

  axios[method](`${AUTH_SERVER}${route}`, body, config)
    .then((response) => {
      onSuccess(response);
    })
    .catch((err) => {
      onError(err);
    });
};

export const auth_request = async (method, route, body, onSuccess, onError) => {
  const config = {};

  if (method === "get") {
    body = config;
  }

  axios[method](`${AUTH_SERVER}${route}`, body, config)
    .then((response) => {
      onSuccess(response);
    })
    .catch((err) => {
      onError(err);
    });
};
