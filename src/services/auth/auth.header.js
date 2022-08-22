import { getToken } from "./auth.services"
export const getAuthorizationHeader = () => {
    const token = getToken();
    if (token) {
        return `Bearer ${token}`;
    }
    return null;
}
