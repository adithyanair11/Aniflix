import './landing.styles.css';
import { Button } from '../../components/custom-button/custom-button.component';
import { useNavigate } from 'react-router-dom';
import {motion,Variants} from 'framer-motion';
export const LandingPage = () => {
    const navigate = useNavigate();
    const goToAuthentication = () => {
        navigate('/authentication');
    }
    const textAnimate = {
        offscreen: {y:100,opacity:0},
        onscreen: {
            y: 0,
            transition: {type:"spring"},
            bounce:0.4,
            duration:3,
            opacity:1
        }
    }
    return(
        <div className='landing-page' style={{
            backgroundImage: "url('http://wallpapercave.com/wp/agHMSaj.jpg')",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        }}>
        <motion.div 
        className='landing-page-contents'
        initial={"offscreen"}
        animate={"onscreen"}
        variants={textAnimate}
        >
            <h1>Welcome to Aniflix</h1>
            <h2>Unlimited films, TV Programmes and more.</h2>
            <p>Watch anywhere. Cancel at any time.</p>
            <Button onClick={goToAuthentication} buttonType="getStarted">get started</Button>
        </motion.div>
        <div className='overlay'></div>
        </div>
    )
}