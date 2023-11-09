import {apiSlice} from "../../../app/api/apiSlice.js";

export const userApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUser: builder.query({query: () => '/customer/profile'}),
        login2: builder.query({
            query: () => '/customer/profile',
        }),
    })
})

export const {
    useGetUserQuery,
    useLogin2Query
} = userApi