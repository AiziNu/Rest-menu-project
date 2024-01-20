import { BASEURL } from "./url";

export const fetchData = async () => {
  try {
    const res = await fetch(BASEURL);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
