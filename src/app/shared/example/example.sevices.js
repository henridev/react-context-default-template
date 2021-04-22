import { http } from "../../config";

const PREFIX_AUTH = "auth";
const PREFIX_USER = "user";

export const logout = () => http.get(`${PREFIX_AUTH}/logout`);

export const getCurrentUser = () => http.get(`${PREFIX_USER}/me`);

export const getStatus = () => http.get("/status");