import React from 'react';
import CatergoryCard from '../../../components/CatergoryCard';
import watch from "../../../assets/category/watch.png";
import iphone from "../../../assets/category/i.png";
import ipad from "../../../assets/category/ipad.png";

const Category = () => {
    return (
        <div className='flex flex-col lg:flex-row gap-6 justify-center items-center m-10'>
            <CatergoryCard image={watch} title={"Smart watches"} price={"1000"}/>
            <CatergoryCard image={ipad} title={"ipad & MacBook"} price={"6000"}/>
            <CatergoryCard image={iphone} title={"Mobile Phones"} price={"3000"}/>
        </div>
    );
};

export default Category;