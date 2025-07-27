import './footer.css';
import facebook from '../assets/images/icon-facebook.svg';
import twitter from '../assets/images/icon-twitter.svg';
import pinterest from '../assets/images/icon-pinterest.svg';
import instagram from '../assets/images/icon-instagram.svg';

function Footer() {
    return (
        <footer>
            <h1>Shortly</h1>

            <div className="footer-links">
                <p>Features</p>
                <nav className="footer-nav">
                <a href="#">Link Shortening</a>
                <a href="#">Branded Links</a>
                <a href="#">Analytics</a>
                </nav>
            </div>

            <div className="footer-links">
                <p>Resources</p>
                <nav className="footer-nav">
                <a href="#">Blog</a>
                <a href="#">Developers</a>
                <a href="#">Support</a>
                </nav>
            </div>

            <div className="footer-links">
                <p>Company</p>
                <nav className="footer-nav">
                <a href="#">About</a>
                <a href="#">Our Team</a>
                <a href="#">Careers</a>
                <a href="#">Contact</a>
                </nav>
            </div>

            <div className="social-media">
                <a href="https://www.facebook.com/hieunguyen6012003 /" target="_blank">
                    <img src= {facebook} />
                </a>

                <a href="#">
                    <img src={twitter} alt="X logo" />
                </a>

                <a href="https://www.pinterest.com/hieunguyen6012003/" target="_blank" >
                    <img src= {pinterest}alt="pinterest logo"/>
                </a>

                <a href="https://www.instagram.com/hieuisso1/" target="_blank" >
                    <img src={instagram} alt="instagram logo" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;