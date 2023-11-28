import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `products`,
    }),
    getProductDetails: builder.query({
        query: (id) => `products/${id}`
    })
  }),
});

export const { useGetAllProductsQuery, useGetProductDetailsQuery } = productApi;