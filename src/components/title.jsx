import './title.css';
import working from '../assets/images/illustration-working.svg';

function Title() {
    return (
        <div className="title">
            <div className="starting-info">
            <h1>More than justs shorter links</h1>
            <p>Build your brand's recognition and get detailed insights on how your links are performing</p>
            <button>Get Started</button>
            </div>

            <div className="working-picture">
            <img className="workingPicture" src={working} alt="working picture" />
            </div>
      </div>
    );
}

export default Title;