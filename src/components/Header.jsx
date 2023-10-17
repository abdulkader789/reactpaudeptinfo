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

    const [androidArticles, setAndroidArticles] = useState(null);

    useEffect(() => {
        fetch('/androidcentral.json')
            .then(res => res.json())
            .then(data => {
                const modifiedAndroid = data.articles.map(article => ({ ...article, isMarked: false, isFavorited: false }));
                setAndroidArticles({ ...data, articles: modifiedAndroid });
            });
    }, []);


    const [techcrunchArticles, setTechcrunchArticles] = useState(null);

    useEffect(() => {
        fetch('/techcrunch.json')
            .then(res => res.json())
            .then(data => {
                const modifiedTechcrunch = data.articles.map(article => ({ ...article, isMarked: false, isFavorited: false }));
                setTechcrunchArticles({ ...data, articles: modifiedTechcrunch });
            });
    }, []);



    const [favouriteArticles, setFavouriteArticles] = useState([])
    const [markedArticles, setMarkedArticles] = useState([])

    const handleFavouriteArticles = (articleData) => {

        const newFavourite = [...favouriteArticles, articleData]
        setFavouriteArticles(newFavourite);

    }
    const handleMarkedArticles = (articleData) => {
        const newMarked = [...markedArticles, articleData]
        setMarkedArticles(newMarked);
    }


    const [isApple, setShowApple] = useState(false)
    const [isTesla, setShowTesla] = useState(false)
    const [isAndroid, setShowAndroid] = useState(false)
    const [isTechcrunch, setShowTechcrunch] = useState(false)

    const handleShowArticle = (show) => {
        switch (show) {
            case 'apple':
                setShowApple(!isApple)
                setShowTesla(false);
                setShowAndroid(false)
                setShowTechcrunch(false)



                break;
            case 'tesla':
                setShowTesla(!isTesla)
                setShowApple(false)
                setShowAndroid(false)
                setShowTechcrunch(false)


                break;
            case 'android':
                setShowAndroid(!isAndroid)
                setShowTesla(false)
                setShowApple(false)
                setShowTechcrunch(false)
                break;
            case 'techcrunch':
                setShowTechcrunch(!isTechcrunch)
                setShowAndroid(false)
                setShowTesla(false)
                setShowApple(false)
                break;
            default:

        }
    }

    return (
        <section>
            <header className=' flex justify-evenly mb-10'>
                <button className="w-60 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded"
                    onClick={() => handleShowArticle('apple')}
                >Apple News</button>
                <button className="w-60 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded"
                    onClick={() => handleShowArticle('tesla')}
                >Tesla News</button>
                <button className="w-60 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded"
                    onClick={() => handleShowArticle('android')}
                >Android Central News</button>
                <button className="w-60 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded"
                    onClick={() => handleShowArticle('techcrunch')}
                >Tech Crunch News</button>


            </header>
            <div className='flex'>
                <section className='w-full'>
                    {
                        isApple ?
                            <div className=''>
                                {
                                    appleArticles ?
                                        <div className='w-full'>
                                            <h1 className='font-extrabold text-3xl text-center'>Apple news</h1>
                                            <ArticleSection articleData={appleArticles}
                                                handleFavouriteArticles={handleFavouriteArticles}

                                                handleMarkedArticles={handleMarkedArticles}

                                            ></ArticleSection>
                                        </div>
                                        : <div className='flex justify-center'><Loader></Loader></div>


                                }
                            </div> : ''
                    }

                    {
                        isTesla ?
                            <div className=''>
                                {
                                    teslaArticles ?
                                        <div>
                                            <h1 className='font-extrabold text-3xl text-center'>Tesla news</h1>
                                            <ArticleSection articleData={teslaArticles}
                                                handleFavouriteArticles={handleFavouriteArticles}
                                                handleMarkedArticles={handleMarkedArticles}

                                            ></ArticleSection>
                                        </div>
                                        : <div className='flex justify-center'><Loader></Loader></div>
                                }
                            </div> : ''
                    }

                    {
                        isAndroid ?
                            <div className=''>
                                {
                                    androidArticles ?
                                        <div className='w-full'>
                                            <h1 className='font-extrabold text-3xl text-center'>Android Central news</h1>
                                            <ArticleSection articleData={androidArticles}
                                                handleFavouriteArticles={handleFavouriteArticles}

                                                handleMarkedArticles={handleMarkedArticles}

                                            ></ArticleSection>
                                        </div>
                                        : <div className='flex justify-center'><Loader></Loader></div>


                                }
                            </div> : ''
                    }

                    {
                        isTechcrunch ?
                            <div className=''>
                                {
                                    androidArticles ?
                                        <div className='w-full'>
                                            <h1 className='font-extrabold text-3xl text-center'>Tech Crunch news</h1>
                                            <ArticleSection articleData={techcrunchArticles}
                                                handleFavouriteArticles={handleFavouriteArticles}

                                                handleMarkedArticles={handleMarkedArticles}

                                            ></ArticleSection>
                                        </div>
                                        : <div className='flex justify-center'><Loader></Loader></div>


                                }
                            </div> : ''
                    }

                </section>

                <div className='w-[350px] border border-black h-[450px] sticky top-0'>
                    <div>
                        <h2 className='text-xl font-bold'>Favourtie Articles</h2>
                        {favouriteArticles.map((fav, index) => <p key={index}>{index + 1}. {fav.title}</p>)}
                    </div>
                    <div>
                        <h2 className='text-xl font-bold'>Marked Articles</h2>
                        {markedArticles.map((mark, index) => <p key={index}>{index + 1}. {mark.title}</p>)}
                    </div>
                </div>

            </div >
        </section>
    );
};

export default Header;
