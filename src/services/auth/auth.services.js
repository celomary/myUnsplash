import  {userLogin} from '../api/auth';

export const login = async (username, password) => {
    const res = await userLogin(username, password);
    if (res.access_token) {
        localStorage.setItem('access_token', res.access_token);
        return true;
    }
    return false;
}

export const logout = () => {
    localStorage.removeItem('access_token');
}

export const isLoggedIn = () => {
    return localStorage.getItem('access_token') !== null;
}

export const getToken = () => {
    return localStorage.getItem('access_token');
}
