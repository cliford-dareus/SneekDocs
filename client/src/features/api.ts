import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../app/store";

export const apiSlice = createApi({
  reducerPath: "docsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).global.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["docs"],
  endpoints: (build) => ({
    registerUser: build.mutation({
      query: (body) => ({
        url: "/api/v1/auth/register",
        method: "POST",
        body,
      }),
    }),
    loginUser: build.mutation({
      query: (body) => ({
        url: "/api/v1/auth/login",
        method: "POST",
        body,
      }),
    }),
    createDoc: build.mutation({
      query: (body) => ({
        url: "/api/v1/doc/create",
        method: "POST",
        body,
      }),
      invalidatesTags: ["docs"],
    }),
    getDocs: build.query({
      query: () => ({
        url: "/api/v1/doc",
      }),
      providesTags: ["docs"],
    }),
    editDoc: build.mutation({
      query: (body) => ({
        url: "/api/v1/doc/edit",
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["docs"],
    }),
    deleteDoc: build.mutation({
      query: (id) => ({
        url: `/api/v1/doc/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["docs"],
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useCreateDocMutation,
  useGetDocsQuery,
  useEditDocMutation,
  useDeleteDocMutation
} = apiSlice;
