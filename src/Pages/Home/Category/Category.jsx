import React from 'react';
import CatergoryCard from '../../../components/CatergoryCard';
import watch from "../../../assets/category/watch.png";
import iphone from "../../../assets/category/i.png";
import ipad from "../../../assets/category/ipad.png";

const Category = () => {
    return (
        <div className='flex gap-6 justify-center items-center m-10'>
            <CatergoryCard image={watch} title={"Smart watches"} price={"23"}/>
            <CatergoryCard image={ipad} title={"ipad & ipad air"} price={"23"}/>
            <CatergoryCard image={iphone} title={"Mobile Phones"} price={"23"}/>
        </div>
    );
};

export default Category;