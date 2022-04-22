import axios from "axios";

//axios instance
export default axios.create({
  baseURL: "https://api.github.com",
  headers: {
    "content-type": "application/json",
  },
});
