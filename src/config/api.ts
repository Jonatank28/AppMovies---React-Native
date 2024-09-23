import axios from "axios";

export const api = axios.create({
  baseURL: "https://help2dev.com/en/api/movies/",
});
