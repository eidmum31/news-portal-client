import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    const categoryNews=useLoaderData();

    return (
        <div>
            <h4>category data : {categoryNews.length}</h4>
            {categoryNews.map(news=><NewsCard key={news._id} news={news}></NewsCard>)}
        </div>
    );
};

export default Category;