import myAxios from "../axios.conf";
import {getAuthorizationHeader} from "../../auth/auth.header";

export const userAddPost = async (label, url) => {
    const response = await myAxios.post('/users/posts/add', {
            label: label,
            url: url
        }, {
        headers: {
            'Authorization':  getAuthorizationHeader(),
        }
    });
    return response.data;
}