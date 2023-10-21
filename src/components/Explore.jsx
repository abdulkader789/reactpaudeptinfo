
const Explore = () => {
    return (
        <div className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white  flex flex-col items-center justify-center">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold mb-2">Welcome to Our Article Page</h1>
                <p className="text-lg mb-4">
                    Explore the world of knowledge and creativity.
                </p>
                <p className="text-lg">
                    Here you can find a wide variety of articles on different topics.
                </p>
            </div>

            <div className="mb-8 flex-col items-center justify-center flex">
                <h2 className="text-2xl font-bold mb-2">Categories of Articles</h2>
                <p className="text-lg px-10">
                    Discover articles in various categories such as technology, science,
                    health, travel, and more. Expand your horizons with our diverse range
                    of topics.
                </p>
            </div>
        </div>
    );
};

export default Explore;