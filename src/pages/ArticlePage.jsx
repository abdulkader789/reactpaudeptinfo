import { useState, useEffect, useRef } from 'react';
import '../../src/styles.css';
import ShowData from '../components/AllArticles/ShowData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import '../styles/home.css'
import Explore from '../components/Explore';
const ArticlePage = () => {

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

    const [isClickedCatagory, setIsClickedCatagory] = useState(false)
    const handleShowArticle = (show) => {
        setIsClickedCatagory(true)
        switch (show) {
            case 'apple':
                setShowApple(true)
                setShowTesla(false);
                setShowAndroid(false)
                setShowTechcrunch(false)



                break;
            case 'tesla':
                setShowTesla(true)
                setShowApple(false)
                setShowAndroid(false)
                setShowTechcrunch(false)


                break;
            case 'android':
                setShowAndroid(true)
                setShowTesla(false)
                setShowApple(false)
                setShowTechcrunch(false)
                break;
            case 'techcrunch':
                setShowTechcrunch(true)
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
        <section className='flex '>
            <div className=" w-80 bg-white  h-full">
                <h2 className="">Category List</h2>
                <ul className=''>
                    <li className=""

                    >Topics</li>
                    <li className=""
                        onClick={() => handleShowArticle('apple')}
                    >Apple</li>
                    <li className=""
                        onClick={() => handleShowArticle('tesla')}
                    >Tesla</li>
                    <li className=""
                        onClick={() => handleShowArticle('android')}
                    >Android Central</li>
                    <li className=""
                        onClick={() => handleShowArticle('techcrunch')}
                    >Tech Crunch</li>
                </ul>
            </div>

            {
                isClickedCatagory ?



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

                    </section> : <div className='w-full'>
                        <Explore></Explore>
                    </div>
            }

            <section className='flex  w-96'>
                <div className='h-full flex flex-col justify-between sticky top-0 w-5'>
                    <FontAwesomeIcon icon={faArrowDown} size="x" className='cursor-pointer'
                        onClick={handleClick}
                    />
                    <FontAwesomeIcon icon={faArrowUp} size="x" className='cursor-pointer'
                        onClick={() => {
                            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                        }}

                    />
                </div>

                <div className='w-full border bg-[#f8fafb] shadow-sm h-full sticky top-0 '>

                    <div>
                        <h2 className='text-xl font-bold'>Favourtie Articles</h2>
                        {favouriteArticles.map((fav, index) => <p key={index}>{index + 1}. {fav.title}</p>)}
                    </div>
                    <div>
                        <h2 className='text-xl font-bold'>Marked Articles</h2>
                        {markedArticles.map((mark, index) => <p key={index}>{index + 1}. {mark.title}</p>)}
                    </div>

                </div>



            </section >
        </section >
    );
};

export default ArticlePage;