import { navigate } from "../../config/navigation/root-navigation";
import {
    removeItemValue,
    storeStringData, retrieveStringValue
} from "../../config/storage/storage.service";
import * as api from "./auth.services";

// action Types
export const LOGOUT = "logout";
export const LOGIN = "login";
export const ERROR = "error";

export const logout = (dispatch) => async () => {
    try {
        dispatch({
            type: LOGOUT
        });
        await api.logout();
        await removeItemValue("token");
        navigate("Home");
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error
        });
    }
};

export const login = (dispatch) => async (token, redirect) => {
    try {
        await storeStringData("token", token);
        const { data } = await api.getCurrentUser(); // user
        dispatch({
            type: LOGIN,
            payload: { name: data.ratpId }
        });
        navigate(redirect.name, {
            token,
            ...redirect.params
        });
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error
        });
    }
};

export const loginWithStoredToken = (dispatch) => async (redirect) => {
    try {
        const token = await retrieveStringValue("token");
        if (token) {
            // const user = jwt_decode(token);
            const user = { name: "stored_user" };
            dispatch({
                type: LOGIN,
                payload: user
            });
            navigate(redirect.name, {
                token,
                ...redirect.params
            });
        }
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error
        });
    }
};