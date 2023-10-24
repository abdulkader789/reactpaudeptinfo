import social from '../../assets/undraw_social_media_re_sulg.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
    return (
        <div>
            <main>


                <section className="section-2">
                    <div className="section-2-main">

                        <div className="section-2-1">
                            <div className="section-2-1-content">
                                <h1 className="section-2-1-title">Curate your feed from dozens of resources.</h1>
                                <p className="section-2-1-desc">We cover all major platforms where one could want to curate their feed from, Reddit, ProductHunt, IndieHackers, and so much more.</p>
                                <a href="#" className="section-2-1-link">See full list of resources <FontAwesomeIcon icon={faArrowRight} /></a>
                            </div>
                            <div className="section-2-1-img">
                                {/* <img src="https://rvs-indiebrew-landing-page.vercel.app/Assets/Social-Media-Icons.png" alt="" /> */}
                                <img src={social} alt='' />
                            </div>
                        </div>

                        <div className="section-2-2">
                            <div className="section-2-2-img">
                                <img src="https://rvs-indiebrew-landing-page.vercel.app/Assets/Phone-Mockup.png" alt="" />
                            </div>
                            <div className="section-2-2-content">
                                <h1 className="section-2-2-title">Access your feed from the comfort of your phone.</h1>
                                <p className="section-2-2-desc">With native apps for both iOS and Android, accessing your curated content has never been easier.</p>
                                <a href="#" className="section-2-2-link">Sign up for the waitlist <FontAwesomeIcon icon={faArrowRight} /></a>
                            </div>
                        </div>

                    </div>
                </section>
            </main>

        </div>
    );
};

export default Hero;