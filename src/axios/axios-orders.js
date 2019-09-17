import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-react-b7062.firebaseio.com/"
});

export default instance;
