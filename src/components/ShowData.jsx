/* eslint-disable react/prop-types */
import ArticleSection from "./ArticleSection";
import Loader from "./Loader";

const ShowData = (props) => {
    const { data, title, handleFavouriteArticles, handleMarkedArticles } = props;

    return (
        <div>

            {
                data ?
                    <div className='w-full'>
                        <h1 className='font-extrabold text-3xl text-center'>{title}</h1>
                        <ArticleSection articleData={data}
                            handleFavouriteArticles={handleFavouriteArticles}

                            handleMarkedArticles={handleMarkedArticles}

                        ></ArticleSection>
                    </div>
                    : <div className='flex justify-center'><Loader></Loader></div>


            }
        </div>

    );
};

export default ShowData;