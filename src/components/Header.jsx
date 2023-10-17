import { useState, useEffect } from 'react';
import '../../src/styles.css';
import ArticleSection from './ArticleSection';
import Loader from './Loader';

const Header = () => {

    const [appleArticles, setAppleArticles] = useState(null);

    useEffect(() => {
        fetch('/appleArticles.json')
            .then(res => res.json())
            .then(data => {
                const modifiedAppleNews = data.articles.map(article => ({ ...article, isMarked: false, isFavorited: false }));
                setAppleArticles({ ...data, articles: modifiedAppleNews });
            });
    }, []);

    const [teslaArticles, setTeslaArticles] = useState(null);

    useEffect(() => {
        fetch('/teslaArticles.json')
            .then(res => res.json())
            .then(data => {
                const modifiedTeslaNews = data.articles.map(article => ({ ...article, isMarked: false, isFavorited: false }));
                setTeslaArticles({ ...data, articles: modifiedTeslaNews });
            });
    }, []);

    const [favouriteArticles, setFavouriteArticles] = useState([])
    const [markedArticles, setMarkedArticles] = useState([])

    const handleArticles = (articleData) => {

        const newFavourite = [...favouriteArticles, articleData]
        setFavouriteArticles(newFavourite);

        const newMarked = [...markedArticles, articleData]
        setMarkedArticles(newMarked);
    }




    //console.log('getting from fetch', appleNews)

    return (
        <div className='w-full flex'>
            <div className='w-full'>

                {
                    appleArticles ?
                        <div className='w-full'>
                            <h1 className='font-extrabold text-3xl text-center'>Apple news</h1>
                            <ArticleSection articleData={appleArticles}
                                handleArticles={handleArticles}

                            ></ArticleSection>
                        </div>
                        : <div className='flex justify-center'><Loader></Loader></div>


                }
                {
                    teslaArticles ?
                        <div>
                            <h1 className='font-extrabold text-3xl text-center'>Tesla news</h1>
                            <ArticleSection articleData={teslaArticles}
                                handleArticles={handleArticles}

                            ></ArticleSection>
                        </div>
                        : <div className='flex justify-center'><Loader></Loader></div>
                }
            </div>

            <div className='w-[350px] border border-black h-[450px] sticky top-0'>
                <div>
                    <h2 className='text-xl font-bold'>Favourtie Articles</h2>
                    {favouriteArticles.map((article, index) => <p key={index}>{index + 1}. {article.title}</p>)}
                </div>
                <div>
                    <h2 className='text-xl font-bold'>Marked Articles</h2>
                    {markedArticles.map((article, index) => <p key={index}>{index + 1}. {article.title}</p>)}
                </div>
            </div>


        </div >
    );
};

export default Header;
