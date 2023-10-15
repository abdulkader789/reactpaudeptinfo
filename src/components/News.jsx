/* eslint-disable react/prop-types */

const News = (props) => {
    const { article, key } = props;
    console.log(article)
    const box_shadow = {
        boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
    }
    const date = new Date(article.publishedAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
    // const timestamp = article.publishedAt;
    // const date = timestamp.split('T')[0];
    // console.log('Extracted Date:', date);


    return (

        <div key={key} className='w-[350px] relative mb-5 h-[400px] p-6 place-self-center ' style={box_shadow}>
            <strong>{article.title}</strong>:
            <img className='h-60' src={article.urlToImage}></img>
            {/* <p>{article.description}</p> */}
            <div className="flex  absolute bottom-5 ">
                <p>{date}</p>
                <button className='text-blue-800 underline ml-5'>Read More</button>

            </div>
        </div>

    );
};

export default News;