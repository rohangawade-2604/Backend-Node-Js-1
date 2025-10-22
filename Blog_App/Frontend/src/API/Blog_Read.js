import axios from "axios";

export const Blog_Read = async(url, token) => {
    try{
        const res = await axios.get(`${url}/notes`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return res.data;
    }
    catch(err){
        console.log(err);
        return err;
    }
}