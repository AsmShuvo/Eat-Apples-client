import React from 'react';
import useAxios from './useAxios';
import { useQuery } from '@tanstack/react-query';

const useProducts = () => {
    const axios = useAxios();
    const { data: products, refetch: productRefetch } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const res = await axios.get("/product/show-product");
            return res.data;
        }
    })
    // console.log("Products:", products);
    return [products, productRefetch];
};

export default useProducts;