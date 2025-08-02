import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryArchive = () => {

    const categoryNews=useLoaderData();
    const [categoryItem]=categoryNews;
    console.log(categoryItem);

    return (
        <div>
            <h2>Category : {categoryItem}</h2>
        </div>
    );
};

export default CategoryArchive;