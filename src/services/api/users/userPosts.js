import myAxios from "../axios.conf";
import {getAuthorizationHeader} from "../../auth/auth.header";

export const userPosts = async () => {
    const response = await myAxios.get('/users/posts', {
        headers: {
            'Authorization':  getAuthorizationHeader(),
    }
    });
    return response.data;
}
