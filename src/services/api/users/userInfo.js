import myAxios from "../axios.conf";
import { getAuthorizationHeader } from "../../auth/auth.header";


export const userInfo = async ()=> {
    const resp = await myAxios.get('/users/user', {
        headers: {
            'Authorization': getAuthorizationHeader(),
        }
    })
    return resp.data;
}