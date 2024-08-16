import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import Product from '../../Product/Product';
import Pagination from '../../../components/Pagination';

const Products = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const searchQuery = query.get('search') || '';
    const [page, setPage] = useState(1);
    const { productsData } = useProducts(page, searchQuery);

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    return (
        <div className='bg-blue-50 mt-2'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3'>
                {
                    productsData?.products?.map(product => <Product product={product} key={product._id} />)
                }
            </div>
            <Pagination
                totalPages={productsData?.totalPages}
                currentPage={productsData?.currentPage}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default Products;
