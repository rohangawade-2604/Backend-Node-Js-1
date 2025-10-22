import axios from "axios";

export const Login = async (url, data) => {
  try {
    const res = await axios.post(`${url}/login`, data, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    return res;
  } catch (err) {
    console.log("Login API Error:", err);
    return err.response || err;
  }
};
