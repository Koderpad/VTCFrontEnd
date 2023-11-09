import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: null,
    token: null,
    isAuthenticated: false,
    error: "",
};

const authReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            const { access_token,customerDTO } = action.payload
            localStorage.setItem('token', access_token)

            return {
                ...state,
                token: access_token,
                user: customerDTO,
                isAuthenticated: true,
            };
        },
        loginSuccess: (state, action) => {
            state.isAuthenticated = true;
            state.token = action.payload.data.token;
            state.user = action.payload.data;
        },
        logOut: (state, action) => {
            state.isAuthenticated = false;
            state.token = null;
            state.user = null;
            localStorage.removeItem('token');
        }
    },
})

export const { setCredentials,loginSuccess, logOut } = authReducer.actions

export default authReducer.reducer

export const selectCurrentUser = (state) => state.auth.user
export const selectCurrentToken = (state) => state.auth.token