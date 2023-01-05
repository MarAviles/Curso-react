import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({
    reducerPath: 'todos',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),

    endpoints: (builder, todoId) => ({
        getTodos: builder.query({
            query: () => '/todos'
        }),
        getTodo: builder.query({
            query: () => `/todos/${ todoId }`
        })
    })
})

export const { useGetTodosQuery, useGetTodoQuery } = todosApi;