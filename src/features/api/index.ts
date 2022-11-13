import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Books } from "../../interfaces"

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
      "X-RapidAPI-Host": import.meta.env.VITE_API_HOST,
    },
  }),
  endpoints: (builder) => ({
    getBooks: builder.query<Books, any>({
      query: () => ({ url: "/books" }),
      transformResponse: (response: { Books: Books }, meta, arg) =>
        response.Books,
    }),
  }),
})

export const { useGetBooksQuery } = bookApi
