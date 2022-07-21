import './signin.styles.css';
import { useState } from 'react';
import { Button } from '../custom-button/custom-button.component';
import { signInWithGooglePopUp, signInAuthUserWithEmailAndPassword} from '../../utils/firebase/firebase.utils';
import { FormInput } from '../form-input/form-input.component';
import { useNavigate } from 'react-router-dom';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";
export const SignIn = () => {
    const navigate = useNavigate();
    const defaultFormFields = {
        email: '',
        password: '',
    }

    const [formFields,setFormFields] = useState(defaultFormFields);

    const {email,password} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const logGoogleUser = async() => {
        await signInWithGooglePopUp();
        navigate('/');
    }

    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormFields({...formFields,[name]:value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await signInAuthUserWithEmailAndPassword(email,password);
            resetFormFields();
            navigate('/');
        }catch(err){
            if(err.code === 'auth/wrong-password'){
                Toastify({
                    text: "Incorrect username or password",
                    duration: 3000,
                    close: false,
                    gravity: "bottom", 
                    position: "center", 
                    style: {
                        backgroundColor: "#3f0d12",
                        backgroundImage: "linear-gradient(315deg, #3f0d12 0%, #a71d31 74%)"
                    },
                  }).showToast();
            }
        }
    }

    return(
        <div className="sign-in-container">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput type="email" 
                label="Email"
                required 
                onChange={handleChange}
                name="email"
                value={email}/>

                <FormInput type="password" 
                label="Password"
                required 
                onChange={handleChange}
                name="password"
                value={password}/>
                
                <div className='sign-in-button-container'>
                    <Button type="submit">Sign in</Button>
                    <Button onClick={logGoogleUser} type="submit" buttonType="google">Sign in with google</Button>
                </div>
            </form>
        </div>
    )
}