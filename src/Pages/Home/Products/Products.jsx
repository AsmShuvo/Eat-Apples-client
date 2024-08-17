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
    const [sortBy, setSortBy] = useState('priceLowToHigh');
    const { productsData } = useProducts(page, searchQuery);
    console.log("product data", productsData);
    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    const handleSortChange = (e) => {
        setSortBy(e.target.value);
    };

    const sortedProducts = [...(productsData?.products || [])].sort((a, b) => {
        if (sortBy === 'priceLowToHigh') {
            return a.price - b.price;
        } else if (sortBy === 'priceHighToLow') {
            return b.price - a.price;
        } else if (sortBy === 'newestFirst') {
            return new Date(b.products?.createdAt.$date) - new Date(a.products?.createdAt.$date);
        }
        return 0;
    });

    return (
        <div className='bg-blue-50 mt-2'>
            <div className='flex justify-between p-4'>
                <select value={sortBy} onChange={handleSortChange} className="bg-white border border-gray-300 rounded p-2">
                    <option value="priceLowToHigh">Price: Low to High</option>
                    <option value="priceHighToLow">Price: High to Low</option>
                    <option value="newestFirst">Date: Newest First</option>
                </select>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 mx-auto'>
                {
                    sortedProducts.map(product => <Product product={product} key={product._id} />)
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
