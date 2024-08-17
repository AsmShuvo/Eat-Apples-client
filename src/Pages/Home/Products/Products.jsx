import React, { useState } from 'react';
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
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
    const { productsData } = useProducts(page, searchQuery);

    const categories = ['iphone', 'ipad', 'macbook'];
    const priceRanges = [
        { label: 'USD 200 - 500', min: 200, max: 500 },
        { label: 'USD 501 - 1000', min: 501, max: 1000 },
        { label: 'USD 1001 - 1500', min: 1001, max: 1500 },
    ];

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    const handleSortChange = (e) => {
        setSortBy(e.target.value);
    };

    const handleCategoryChange = (e) => {
        const category = e.target.value;
        setSelectedCategories(prev => 
            prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
        );
    };

    const handlePriceRangeChange = (e) => {
        const { value, checked } = e.target;
        setSelectedPriceRanges(prev =>
            checked ? [...prev, value] : prev.filter(range => range !== value)
        );
    };

    const filteredProducts = (productsData?.products || []).filter(product => {
        if (selectedCategories.length && !selectedCategories.includes(product.category)) {
            return false;
        }
        if (selectedPriceRanges.length) {
            const priceRangeMatch = selectedPriceRanges.some(range => {
                const [min, max] = range.split('-').map(Number);
                return product.price >= min && product.price <= max;
            });
            if (!priceRangeMatch) {
                return false;
            }
        }
        return true;
    });

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortBy === 'priceLowToHigh') {
            return a.price - b.price;
        } else if (sortBy === 'priceHighToLow') {
            return b.price - a.price;
        } else if (sortBy === 'newestFirst') {
            return new Date(b.createdAt.$date) - new Date(a.createdAt.$date);
        }
        return 0;
    });

    return (
        <div className='bg-blue-50 mt-4 p-4'>
            <div className='flex flex-col lg:flex-row justify-between'>
                {/* Filter Section */}
                <div className="bg-blue-100 p-4 rounded-lg mb-4 lg:mb-0 lg:w-1/6">
                    <h3 className="font-bold text-lg mb-4">Filter by</h3>

                    <div className="mb-6">
                        <h4 className="font-medium text-md mb-2">Categories</h4>
                        {categories.map(category => (
                            <label key={category} className="block mb-2 text-gray-700">
                                <input
                                    type="checkbox"
                                    value={category}
                                    checked={selectedCategories.includes(category)}
                                    onChange={handleCategoryChange}
                                    className="mr-2 rounded"
                                />
                                {category}
                            </label>
                        ))}
                    </div>

                    <div>
                        <h4 className="font-medium text-md mb-2">Price Range</h4>
                        {priceRanges.map(range => (
                            <label key={range.label} className="block mb-2 text-gray-700">
                                <input
                                    type="checkbox"
                                    value={`${range.min}-${range.max}`}
                                    checked={selectedPriceRanges.includes(`${range.min}-${range.max}`)}
                                    onChange={handlePriceRangeChange}
                                    className="mr-2 rounded"
                                />
                                {range.label}
                            </label>
                        ))}
                    </div>
                </div>

                {/* Products and Sort Section */}
                <div className="lg:w-3/4 lg:pl-4">
                    <div className="flex justify-end mb-4">
                        <select
                            value={sortBy}
                            onChange={handleSortChange}
                            className="bg-white border border-gray-300 rounded p-2 text-gray-700"
                        >
                            <option value="priceLowToHigh">Price: Low to High</option>
                            <option value="priceHighToLow">Price: High to Low</option>
                            <option value="newestFirst">Date: Newest First</option>
                        </select>
                    </div>

                    <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                        {sortedProducts.map(product => (
                            <Product product={product} key={product._id} />
                        ))}
                    </div>

                    <div className="mt-6">
                        <Pagination
                            totalPages={productsData?.totalPages}
                            currentPage={productsData?.currentPage}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
