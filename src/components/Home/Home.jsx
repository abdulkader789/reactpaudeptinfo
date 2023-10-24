
import './Home.css';
const Home = () => {

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Section */}
      <div className="flex-none lg:w-1/2 bg-indigo-500 p-8 text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to our<br /> University Info Hub</h1>
        <p className="text-lg mb-8">
          Discover the latest updates, news, and events about our university. Get connected with the vibrant
          community and stay informed.
        </p>
        <button className="bg-white text-indigo-500 hover:bg-indigo-700 hover:text-white py-2 px-4 rounded">
          Explore More
        </button>
      </div>

      {/* Right Section */}
      <div className="flex-1 bg-indigo-200 p-8">
        {/* <h2 className="text-3xl font-semibold mb-4">Featured Information</h2> */}
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Admissions</h3>
            <p>Find information about admissions process, requirements, and important dates.</p>
            <button className="text-indigo-500 mt-4 hover:underline">Learn More</button>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Events</h3>
            <p>Explore upcoming events, workshops, and seminars happening at our university.</p>
            <button className="text-indigo-500 mt-4 hover:underline">See Events</button>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Events</h3>
            <p>Explore upcoming events, workshops, and seminars happening at our university.</p>
            <button className="text-indigo-500 mt-4 hover:underline">See Events</button>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Events</h3>
            <p>Explore upcoming events, workshops, and seminars happening at our university.</p>
            <button className="text-indigo-500 mt-4 hover:underline">See Events</button>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Home;
