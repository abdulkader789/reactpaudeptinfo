/* eslint-disable react/prop-types */
import { useState } from "react";
import Article from "./Article";



const ArticleSection = (props) => {
    const { articleData } = props
    const { handleArticles } = props;

    // console.log('in section ', articleData)

    const [displayedArticles, setDisplayedArticles] = useState(3);

    const handleShowMore = () => {
        setDisplayedArticles(articleData.articles.length); // Show all articles
    };

    const handleShowLess = () => {
        setDisplayedArticles(3); // Show only 4 articles
    };


    return (
        <section className='my-5'>

            {articleData.articles.length > 3 ? (
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

            <div className='grid grid-cols-1  lg:grid-cols-3 w-full   '>
                {articleData.articles.slice(0, displayedArticles).map((article, index) => (
                    <Article key={index} article={article}
                        handleArticles={handleArticles}

                    />
                ))}
            </div>




        </section >
    );
};

export default ArticleSection;