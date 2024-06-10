import axios from "axios";

const axiosPublic = axios.create({
  // baseURL: "https://survey-app-server-iota.vercel.app",
  baseURL: "http://localhost:4000",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
