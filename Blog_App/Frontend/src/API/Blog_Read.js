import axios from "axios";

export const Blog_Read = async(url) => {
    try{
        const res = await axios.get(`${url}/note`)
        return res.data;
    }
    catch(err){
        console.log(err);
        return err;
    }
}