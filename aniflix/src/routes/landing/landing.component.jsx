import './landing.styles.css';
import { Button } from '../../components/custom-button/custom-button.component';
import { useNavigate } from 'react-router-dom';
export const LandingPage = () => {
    const navigate = useNavigate();
    const goToAuthentication = () => {
        navigate('/authentication');
    }
    return(
        <div className='landing-page' style={{
            backgroundImage: "url('http://wallpapercave.com/wp/agHMSaj.jpg')",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        }}>
        <div className='landing-page-contents'>
            <h1>Welcome to Aniflix</h1>
            <h2>Unlimited films, TV Programmes and more.</h2>
            <p>Watch anywhere. Cancel at any time.</p>
            <Button onClick={goToAuthentication} buttonType="getStarted">get started</Button>
        </div>
        <div className='overlay'></div>
        </div>
    )
}