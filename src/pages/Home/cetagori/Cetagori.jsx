import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Cetagori = () => {
    const {id} = useParams()
    const categoryNews = useLoaderData()
    return (
        <div>
            {id && <span> This  category  News{categoryNews.length}</span>}
            {
                categoryNews.map(news => <NewsCard key={news._id} news={news}></NewsCard>)
            }
        </div>
    );
};

export default Cetagori;