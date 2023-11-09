import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials, logOut } from '../../features/auth/authSlice'
import {BASE_URL_VTC} from "../../constants/urls.js";

const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL_VTC,
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token
        // const token = 'FAKE TOKEN'
        if (token) {
            headers.set("Authorization", `Bearer ${token}`)
        }
        return headers
    }
})

const baseQueryWithTest = async (args, api, extraOptions) => {
    console.log('let result = await baseQuery(args, api, extraOptions)')
    let result = await baseQuery(args, api, extraOptions)

    if (result?.error?.status === 403) {
        console.log('sending refresh token')
        // send refresh token to get new access token
        const refreshResult = await baseQuery('/auth/refresh-token', api,
            {
                credentials: 'include',
                method: 'POST'
            }
        )
        console.log('refreshResult: ',refreshResult)
        if (refreshResult?.data) {
            console.log('refreshResult.data: ',refreshResult.data)

            // const user = api.getState().auth.user
            // // store the new token
            // api.dispatch(setCredentials({ ...refreshResult.data, user }))
            // // retry the original query with new access token
            // result = await baseQuery(args, api, extraOptions)
        } else {
            console.log('logOut()')
            // api.dispatch(logOut())
        }
    }
    else console.log('result khong dat 403!!!!')

    return result
}

// const baseQueryWithReAuth = async (args, api, extraOptions) => {
//     console.log('let result = await baseQuery(args, api, extraOptions)')
//     let result = await baseQuery(args, api, extraOptions)
//     console.log('result: ',result)
//
//     if (result?.error?.status === 403) {
//         console.log('sending refresh token')
//         // send refresh token to get new access token
//         const refreshResult = await baseQuery('/auth/refresh-token', api, extraOptions)
//         console.log('refreshResult: ',refreshResult)
//         if (refreshResult?.data) {
//             console.log('refreshResult.data: ',refreshResult.data)
//
//             const user = api.getState().auth.user
//             // store the new token
//             api.dispatch(setCredentials({ ...refreshResult.data, user }))
//             // retry the original query with new access token
//             result = await baseQuery(args, api, extraOptions)
//         } else {
//             console.log('logOut()')
//             api.dispatch(logOut())
//         }
//     }
//     else console.log('result khong dat 403!!!!')
//
//     return result
// }

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithTest,
    endpoints: builder => ({})
})
