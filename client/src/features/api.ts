import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'docsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001',
    }),
    endpoints: (build) => ({
        registerUser: build.mutation({
            query:(body) => ({
                url: '/api/v1/auth/register',
                method: 'POST',
                body
            })
        }),
        loginUser: build.mutation({
            query:(body) => ({
                url: '/api/v1/auth/login',
                method: 'POST',
                body
            })
        })
    })
});

export const { useRegisterUserMutation, useLoginUserMutation } = apiSlice;



