import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories,setCategories]=useState([]);
    useEffect(()=>{
        fetch('https://dragon-news-server-mu-henna.vercel.app/categories')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    console.log(categories);
    return (
        <div>
            <h4>All Category</h4>
            {
                categories.map(category=><p key={category.id}>
                    <Link className='text-decoration-none text-dark' to={`/category/${category.id}`}>{category.name}</Link>
                </p>)
            }
        </div>
    );
};

export default LeftNav;