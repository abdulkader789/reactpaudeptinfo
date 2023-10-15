/* eslint-disable react/prop-types */
import { useState } from "react";
import News from "./News";



const NewsSection = (props) => {
    const { newsData } = props


    const [displayedArticles, setDisplayedArticles] = useState(3);

    const handleShowMore = () => {
        setDisplayedArticles(newsData.articles.length); // Show all articles
    };

    const handleShowLess = () => {
        setDisplayedArticles(3); // Show only 4 articles
    };
    return (
        <section className=''>
            {newsData.articles.length > 3 ? (
                <div className='my-5'>
                    {displayedArticles === 3 ? (
                        <div className='flex justify-center'>
                            <button onClick={handleShowMore}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded"
                            >Show More</button>
                        </div>
                    ) : (
                        <div className='flex justify-center'>
                            <button onClick={handleShowLess}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded"
                            >Show Less</button>
                        </div>
                    )}
                </div>
            ) : null}

            <div className='grid grid-cols-3 w-full   '>
                {newsData.articles.slice(0, displayedArticles).map((article, index) => (
                    <News key={index} article={article} />
                ))}
            </div>

        </section>
    );
};

export default NewsSection;