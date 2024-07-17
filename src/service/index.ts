import axios from "axios";

export const client = axios.create({
    baseURL: 'https://www.tongtongball.com',
    timeout: 1000,
    headers: {
      "x-Requested-With": "XMLHttpRequest",
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Origin": "*",
    },
  });