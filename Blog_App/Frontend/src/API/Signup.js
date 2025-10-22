import axios from "axios";

export const Signup = async (url, data) => {
  try {
    const res = await axios.post(`${url}/signup`, data, {
      headers: { "Content-Type": "application/json" }
    });
    return res;
  } catch (err) {
    console.log("Signup API Error:", err);
    return err.response || err;
  }
};
