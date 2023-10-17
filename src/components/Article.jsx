/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Article = (props) => {

    const { article, handleFavouriteArticles, handleMarkedArticles } = props;

    const [favourite, setFavourite] = useState(false);
    const [marked, setMarked] = useState(false);

    const date = new Date(article.publishedAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });


    const handleFavourite = () => {
        setFavourite(!favourite);
        handleFavouriteArticles(article)

    };

    const handleMarked = () => {
        setMarked(!marked)
        handleMarkedArticles(article)
    };

    return (



        <div className='w-[300px] relative mb-5 px-3  place-self-center rounded-sm '>
            <div className="h-20">
                <strong>{article.title}</strong>:
            </div>
            <img className='h-48 w-full' src={article.urlToImage}></img>
            <div className="flex">
                <p>{date}</p>
                <button className='text-blue-800 underline ml-5'><a href={article.url} target="_blank" rel="noreferrer" >Read More</a></button>

            </div>
            <div className='flex h-10 items-center'>
                <div className='w-1/2 flex items-center font-semibold'>
                    <p>Add To</p>
                    <FontAwesomeIcon icon={faHeart} className={`ml-2 ${favourite ? 'text-red-600' : 'text-black'}`}
                        onClick={handleFavourite}
                    />
                </div>
                <div className='flex w-1/2 justify-evenly items-center'>
                    <div className="message font-semibold">
                        {marked ? 'Completed' : '5 min Read'}
                    </div>
                    <input
                        type="checkbox"
                        id="markUnmarkCheckbox"
                        onChange={handleMarked}
                    />

                </div>

            </div>
        </div>


    );
};

export default Article;