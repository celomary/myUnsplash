import myAxios from "../axios.conf";

export const createUser = async (username, password) => {
    const response = await myAxios({
        method: 'post',
        url: '/users/create',
        data: {
            username,
            password
        }
    });
    return response.data;
}

