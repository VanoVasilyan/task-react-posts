import {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
    createApi,
    fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { TBeResponseWithData } from '../../types/global';

const baseQuery = fetchBaseQuery({
    baseUrl: process.env.REACT_APP_PUBLIC_URL,
});

export const baseQueryWrapper: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);
    return result;
};

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: baseQueryWrapper,
    endpoints: (builder) => ({
        getAllPosts: builder.query<TBeResponseWithData, {}>
            ({ query: () => ({ url: 'react/data.json' }) })
    }),
});

export const { useGetAllPostsQuery } = postsApi;
