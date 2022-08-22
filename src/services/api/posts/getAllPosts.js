import myAxios from "../axios.conf"

export const getAllPosts = async ()=> {
    const res = await myAxios({
        method: 'get',
        url: '/posts/all'
    })
    return res.data;
}