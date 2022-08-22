import myAxios from "../axios.conf";
export const userLogin = async (username, password ) => {
    try {
        const response = await myAxios({
            method: 'post',
            url: '/auth/login',
            data: {
                username,
                password
            }
        });
        return response.data;
    }
    catch (error) {
        return error.response.data;
    }
}
