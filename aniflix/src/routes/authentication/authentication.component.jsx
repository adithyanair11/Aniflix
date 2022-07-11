import './authentication.styles.css';
import { SignUp } from '../../components/signup/signup.component';
import { SignIn } from '../../components/signin/signin.component';
export const AuthenticationPage = () => {
    return(
        <div className='authentication-page'>
            <SignIn />
            <SignUp />
        </div>
    )
}