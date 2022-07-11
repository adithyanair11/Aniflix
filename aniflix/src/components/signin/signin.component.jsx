import './signin.styles.css';
import { useState } from 'react';
import { Button } from '../custom-button/custom-button.component';
import { signInWithGooglePopUp, signInAuthUserWithEmailAndPassword} from '../../utils/firebase/firebase.utils';
import { FormInput } from '../form-input/form-input.component';
export const SignIn = () => {

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
        }catch(err){
            if(err.code === 'auth/wrong-password'){
                alert('incorrect password');
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
                
                <Button type="submit">Sign in</Button>
                <Button onClick={logGoogleUser} type="submit" buttonType="google">Sign in with google</Button>
            </form>
        </div>
    )
}