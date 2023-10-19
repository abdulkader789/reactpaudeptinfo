import { useState, useEffect, useRef } from 'react';
import '../../src/styles.css';
import ShowData from './ShowData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

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


    const ref = useRef(null);

    const handleClick = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section>
            <header className=' flex justify-evenly mb-10'>
                <button className="rounded-2xl bg-black text-white w-36 font-bold text-sm py-2 px-5"
                    onClick={() => handleShowArticle('apple')}
                >Topics</button>
                <button className="rounded-2xl bg-gray-200 w-36 font-bold text-sm"
                    onClick={() => handleShowArticle('apple')}
                >Apple</button>
                <button className="rounded-2xl bg-gray-200 w-36 font-bold text-sm"
                    onClick={() => handleShowArticle('tesla')}
                >Tesla</button>
                <button className="rounded-2xl bg-gray-200 w-36 font-bold text-sm"
                    onClick={() => handleShowArticle('android')}
                >Android Central</button>
                <button className="rounded-2xl bg-gray-200 w-36 font-bold text-sm"
                    onClick={() => handleShowArticle('techcrunch')}
                >Tech Crunch</button>


            </header>

            <div className='flex justify-evenly'>
                <section >

                    {
                        isApple ?
                            <div>
                                <ShowData data={appleArticles}
                                    handleFavouriteArticles={handleFavouriteArticles}
                                    handleMarkedArticles={handleMarkedArticles}
                                    title={"Apple Articles"}
                                ></ShowData>
                                <div ref={ref}></div>
                            </div> : ''
                    }

                    {
                        isTesla ?
                            <div className=''>
                                <ShowData data={teslaArticles}
                                    handleFavouriteArticles={handleFavouriteArticles}
                                    handleMarkedArticles={handleMarkedArticles}
                                    title={"Tesla Articles"}
                                ></ShowData>
                                <div ref={ref}></div>

                            </div> : ''
                    }

                    {
                        isAndroid ?
                            <div className=''>
                                <ShowData data={androidArticles}
                                    handleFavouriteArticles={handleFavouriteArticles}
                                    handleMarkedArticles={handleMarkedArticles}
                                    title={"Android Articles"}
                                ></ShowData>
                                <div ref={ref}></div>

                            </div> : ''
                    }

                    {
                        isTechcrunch ?
                            <div className=''>
                                <ShowData data={techcrunchArticles}
                                    handleFavouriteArticles={handleFavouriteArticles}
                                    handleMarkedArticles={handleMarkedArticles}
                                    title={"Techcrunch Articles"}
                                ></ShowData>
                                <div ref={ref}></div>

                            </div> : ''
                    }

                </section>

                <div className='h-[480px] flex flex-col justify-between sticky top-0'>
                    <FontAwesomeIcon icon={faArrowUp} size="2x" className='cursor-pointer'
                        onClick={() => {
                            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                        }}
                    />
                    <FontAwesomeIcon icon={faArrowDown} size="2x" className='cursor-pointer'
                        onClick={handleClick}
                    />
                </div>

                <div className='w-[350px] border border-black h-[480px] sticky top-0'>

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
