import React, { useState, useEffect } from 'react';
import '../../src/styles.css';
import News from './News';
import NewsSection from './NewsSection';

const Header = () => {
    const [newsData, setNewsData] = useState(null);

    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=apple&from=2023-10-14&to=2023-10-14&sortBy=popularity&apiKey=3b89fec84d4a46bd8bc16e01ec765b7c')
            .then(res => res.json())
            .then(data => setNewsData(data));
    }, []);
    // const [displayedArticles, setDisplayedArticles] = useState(3);

    // const handleShowMore = () => {
    //     setDisplayedArticles(newsData.articles.length); // Show all articles
    // };

    // const handleShowLess = () => {
    //     setDisplayedArticles(3); // Show only 4 articles
    // };

    console.log('getting from fetch', newsData)

    return (
        <div className='w-full'>
            <div>
                <h1 className='font-extrabold text-3xl'>Apple news</h1>
            </div>
            <NewsSection newsData={newsData}></NewsSection>

            {/* <section className=''>
                <div className='grid grid-cols-3 w-full   '>
                    {newsData.articles.slice(0, displayedArticles).map((article, index) => (
                        <News key={index} article={article} />
                    ))}
                </div>
                {newsData.articles.length > 3 ? (
                    <div className='mt-4'>
                        {displayedArticles === 3 ? (
                            <div className='flex justify-center'>
                                <button onClick={handleShowMore}>Show More</button>
                            </div>
                        ) : (
                            <div className='flex justify-center'>
                                <button onClick={handleShowLess}>Show Less</button>
                            </div>
                        )}
                    </div>
                ) : null}
            </section> */}

        </div>
    );
};

export default Header;
