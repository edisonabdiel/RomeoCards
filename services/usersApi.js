import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
//utility function to efficiently add url + headers to endpoints
const createRequest = (url) => ({ url, headers: { 'Content-Type': 'application/json' } });
const baseURL = 'http://localhost:3000';
// createApi takes 2 arguments: the reducerPath and the fatchBaseQuery which in turn dispatches the queries we will later use as redux hooks
export const usersApi = createApi({
  reducerPath: 'UsersApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => createRequest('/users'),
    }),
    getUsersDetails: builder.query({
        query: (id) => createRequest(`/users/${id}`),
      }),
  }),
});

//Destructure the endpoints to be later used as redux hooks wherever needed
export const { useGetUsersQuery, useGetUsersDetailsQuery } = usersApi;