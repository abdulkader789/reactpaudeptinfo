import { useState, useEffect } from 'react';
import '../../src/styles.css';
import ArticleSection from './ArticleSection';
import Loader from './Loader';

const Header = () => {

    const [appleNews, setAppleNews] = useState(null);

    useEffect(() => {
        fetch('/appleArticles.json')
            .then(res => res.json())
            .then(data => setAppleNews(data));
    }, []);

    const [teslaNews, setTeslaNews] = useState(null);

    useEffect(() => {
        fetch('/teslaArticles.json')
            .then(res => res.json())
            .then(data => setTeslaNews(data));
    }, []);

    const [selectedArticle, setSelectedArticle] = useState([])

    const handleFavouriteToggle = (articleId, isFavourite, article) => {
        // Implement logic to record the favorite status in your state or send it to the server
        // console.log(`Article ID ${articleId} is ${isFavourite ? 'marked as favorite' : 'unmarked as favorite'} ${article}`);
        const newArticle = [...selectedArticle, article]
        setSelectedArticle(newArticle)
    };

    const handleArticleReadToggle = (articleId, isRead, article) => {
        // Implement logic to record the read status in your state or send it to the server
        console.log(`Article ID ${articleId} is ${isRead ? 'marked as read' : 'marked as unread'} ${article}`);
    };



    //console.log('getting from fetch', appleNews)

    return (
        <div className='w-full flex'>
            <div className='w-full'>

                {
                    appleNews ?
                        <div className='w-full'>
                            <h1 className='font-extrabold text-3xl text-center'>Apple news</h1>
                            <ArticleSection newsData={appleNews}
                                handleFavouriteToggle={handleFavouriteToggle}
                                handleArticleReadToggle={handleArticleReadToggle}


                            ></ArticleSection>
                        </div>
                        : <div className='flex justify-center'><Loader></Loader></div>


                }
                {
                    teslaNews ?
                        <div>
                            <h1 className='font-extrabold text-3xl text-center'>Tesla news</h1>
                            <ArticleSection newsData={teslaNews}
                                handleFavouriteToggle={handleFavouriteToggle}
                                handleArticleReadToggle={handleArticleReadToggle}

                            ></ArticleSection>
                        </div>
                        : <div className='flex justify-center'><Loader></Loader></div>
                }
            </div>

            <div className='w-[350px] border border-black h-[450px] sticky top-0'>
                {selectedArticle.map(article => console.log(article.title))}
            </div>

        </div >
    );
};

export default Header;
