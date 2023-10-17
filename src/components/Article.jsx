/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useCallback, useState } from 'react';

const Article = (props) => {



    const { article, key, handleFavouriteToggle, handleArticleReadToggle } = props;
    const [favourite, setFavourite] = useState(false);
    const [isMarked, setIsMarked] = useState(false);
    const date = new Date(article.publishedAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });


    const handleFavourite = () => {
        setFavourite(!favourite);
        handleFavouriteToggle(article.id, !favourite, article); // Pass the article ID and the new favorite status to the parent component
    };

    const handleCheckboxChange = () => {
        setIsMarked(!isMarked);
        handleArticleReadToggle(article.id, !isMarked, article); // Pass the article ID and the new read status to the parent component
    };





    return (

        <div key={key} className='w-[320px] relative mb-5 px-3  py-6 place-self-center bg-gray-100 border border-gray-400 '>
            <div className="h-20">
                <strong>{article.title}</strong>:
            </div>
            <img className='h-60 w-full' src={article.urlToImage}></img>
            <div className="flex my-2">
                <p>{date}</p>
                <button className='text-blue-800 underline ml-5'><a href={article.url} target="_blank" rel="noreferrer" >Read More</a></button>

            </div>
            <div className='flex h-10 items-center'>
                <div className='w-1/2 flex items-center font-semibold'>
                    <p>Add To</p>
                    <FontAwesomeIcon icon={faHeart} className={`ml-2 ${favourite ? 'text-red-600' : 'text-black'}`} onClick={handleFavourite} />
                </div>
                <div className='flex w-1/2 justify-evenly items-center'>
                    <div className="message font-semibold">
                        {isMarked ? 'Completed' : '5 min Read'}
                    </div>
                    <input
                        type="checkbox"
                        id="markUnmarkCheckbox"
                        checked={isMarked}
                        onChange={handleCheckboxChange}

                    />


                </div>

            </div>
        </div>

    );
};

export default Article;