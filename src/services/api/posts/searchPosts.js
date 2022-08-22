import myAxios from "../axios.conf"


export const searchPosts = async (toSearch) => {
    const res = await myAxios({
        method: 'get',
        url : `/posts/filter?search=${toSearch}`
    })
    return res.data;
}
