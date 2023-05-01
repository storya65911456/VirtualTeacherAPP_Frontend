import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const NursingApi = createApi({
    reducerPath: 'NursingApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
    endpoints: (builder) => ({
        getQATest: builder.query({
            query: () => 'GetQuestions'
        }),
        getUser: builder.query({
            query: ({ account, pass }) => ({
                url: `User`,
                method: 'POST',
                body: { account: account, password: pass }
            })
        }),
        getQA: builder.query({
            query: (val) => ({
                url: `QA`,
                method: 'POST',
                body: { query: val }
            })
        })
    })
});

export const { useGetQATestQuery, useGetUserQuery, useLazyGetQAQuery } = NursingApi;
