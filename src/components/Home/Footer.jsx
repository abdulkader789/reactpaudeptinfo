import '../../styles/home.css'
const Footer = () => {
    return (

        <footer>
            <div className="footer-main">
                <div className="footer-content">
                    <div className="footer-1">
                        <a href="index.html" className="footer-1-logo">BrainStream</a>
                        <p className="footer-l-content">With BrainStream, get personal feeds from resources all around the web, including Reddit, HackerNews, and much more.</p>
                        <p className="footer-1-copyright">Created by - <span>Abdul Kader</span></p>
                    </div>
                    <div className="footer-2">
                        <div className="footer-f1">
                            <div className="footer-2-1">
                                <h5 className="footer-2-1-title">Sitemap</h5>
                                <ul className="footer-2-1-links">
                                    <li><a href="#">Homepage</a></li>
                                    <li><a href="#">Pricing</a></li>
                                    <li><a href="#">Testimonials</a></li>
                                    <li><a href="#">Features</a></li>
                                </ul>
                            </div>
                            <div className="footer-2-2">
                                <h5 className="footer-2-2-title">Resources</h5>
                                <ul className="footer-2-2-links">
                                    <li><a href="#">Support</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">FAQ</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-f2">
                            <div className="footer-2-3">
                                <h5 className="footer-2-3-title">Company</h5>
                                <ul className="footer-2-3-links">
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Customers</a></li>
                                    <li><a href="#">Blog</a></li>
                                </ul>
                            </div>
                            <div className="footer-2-4">
                                <h5 className="footer-2-4-title">Portfolios</h5>
                                <ul className="footer-2-4-links">
                                    <li><a href="#">HackerNews</a></li>
                                    <li><a href="#">Reddit</a></li>
                                    <li><a href="#">Twitter</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;