import axios from "axios";

export const fetchData = (url) => {
  axios.get(url).then((response) => {
    const data = response.data;
    console.log("ESTO ANDA?", data);
    return data;
  });
};
