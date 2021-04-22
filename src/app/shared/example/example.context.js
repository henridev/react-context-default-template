import { login, logout, loginWithStoredToken } from "./auth.actions";
import { reducer } from "./auth.reducer";
import contextCreator from "../utils/createDataContext";

// Init state
const state = {
    user: null,
    errors: {},
    isAuthorized: false,
    isLoading: false
};

const { Context, Provider } = contextCreator(
    reducer,
    {
        login,
        logout,
        loginWithStoredToken
    },
    state
);


export { Context as AuthContext };
export { Provider as AuthProvider };