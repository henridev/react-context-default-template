
import { ERROR, LOGIN, LOGOUT } from "./auth.actions";

export const reducer = (state, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isAuthorized: true,
                isLoading: false,
                user: action.payload
            };
        case LOGOUT:
            return {
                ...state,
                isAuthorized: false,
                isLoading: false,
                user: null
            };
        case ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};