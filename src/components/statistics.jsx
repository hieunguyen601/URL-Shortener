import './statistics.css';
import brandIcon from '../assets/images/icon-brand-recognition.svg';
import recordsIcon from '../assets/images/icon-detailed-records.svg';
import customIcon from '../assets/images/icon-fully-customizable.svg';

function Statistics() {
    return (
       <>
        <div className="statistics">
            <div className="recognition">
            <img src={brandIcon} alt="brand icon" />
            <p className="statistics-title">Brand Recognition</p>
            <p className="statistics-description">
                Boost your brand recognition with cach click. Ganeric links don't mean a thing. Branded links help instil confidence in your content.
            </p>
            </div>

            <div className="records-title">
                <img src={recordsIcon} alt="records icon" />
                <p className="statistics-title">Detailed Records</p>
                <p className="statistics-description">Gain insights into whi is clicking your links. Knowing when and where people engage with your content halps inform better decisions.</p>
            </div>

            <div className="custom-title">
                <img src={customIcon} alt="custom icon" />
                <p className="statistics-title">Fully Customizable</p>
                <p className="statistics-description">Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.
                </p>
            </div>
        </div>
        <div className="shorten-image">
            <h1>Boost your links today</h1>
            <button>Get Started</button>
        </div>
       
       </>
    );
}

export default Statistics;