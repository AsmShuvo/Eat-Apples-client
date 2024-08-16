import React from 'react';
import useAxios from './useAxios';
import { useQuery } from '@tanstack/react-query';

const useProducts = (page = 1, searchQuery = '') => {
    const axios = useAxios();
    
    const productsQuery = useQuery({
        queryKey: ["products", page, searchQuery],
        queryFn: async () => {
            const res = await axios.get(`/product/show-product?page=${page}&limit=12&search=${searchQuery}`);
            return res.data;
        },
    });

    return { productsData: productsQuery.data, productsRefetch: productsQuery.refetch };
};

export default useProducts;
