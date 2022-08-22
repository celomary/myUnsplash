import myAxios from "../axios.conf";
import { getAuthorizationHeader } from "../../auth/auth.header";

export const userImageUpdate = async (image) => {
    const response = await myAxios.post('/users/update_picture', {
            imageData: image
        },
        {
        headers: {
            Authorization: getAuthorizationHeader(),
        }
    });
    return response.data;
}
