import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://fiverr-b.onrender.com/api/",
  withCredentials: true,
});

export default newRequest;
