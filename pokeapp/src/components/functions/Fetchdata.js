import axios from "axios";
// refactorizar para hacer de una funcion
export const fetch = (url) => {
  axios.get(url).then((response) => {
    const data = response.data;
    return data;
  });
};
