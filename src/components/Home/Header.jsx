import '../../styles/home.css'
const Header = () => {


    return (
        <main>
            <section className="section-1">

                <div className="section-1-main">
                    <div className="section-1-content">
                        <h1 className="section-1-title">Your weekly personal feed digest.</h1>
                        <p className="section-1-desc">With BrainStream, get personal feeds from resources all around the web, including Reddit, HackerNews, IndieHackers, and much more.</p>
                        <div className="section-1-links">
                            <a href="signup.html" className="section-1-link">Get Started - <span>It's free</span></a>
                        </div>

                        <p className="section-1-alt-txt">Join <span>32,642</span> BrainStream viwers in curating their personal digest.</p>
                    </div>
                    <div className="section-1-img">
                        <img src="https://rvs-indiebrew-landing-page.vercel.app/Assets/Feed-Mockup.png" alt="" />
                    </div>
                </div>
            </section>
        </main>


    );
};

export default Header;
