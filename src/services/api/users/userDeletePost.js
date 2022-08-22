import myAxios from "../axios.conf";
import { getAuthorizationHeader } from "../../auth/auth.header";

export const userDeletePost = async (id) => {
    const response = await myAxios.post(`/users/posts/${id}/delete`, {}, {
        headers: {
            'Authorization': getAuthorizationHeader(),
        }
    });
    return response.data;
}