import React from 'react';
import useProducts from '../../../hooks/useProducts';
import Product from '../../Product/Product';

const Products = () => {
    const [products, refetchProducts] = useProducts();
    console.log("all procuts", products);

    return (
        <div className='bg-blue-50'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3'>
                {
                    products?.jobs?.map(product => <Product product={product} key={product._id}/>)
                }
            </div>
        </div>
    );
};

export default Products;