import './signup.styles.css';
import { useState } from 'react';
import { createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import { createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import { Button } from '../custom-button/custom-button.component';
import { FormInput } from '../form-input/form-input.component';

export const SignUp = () => {

    const defaultFormFields = {
        userName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    const [formFields,setFormFields] = useState(defaultFormFields);

    const {userName,email,password,confirmPassword} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormFields({...formFields,[name]:value})
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        if(password === confirmPassword){
            try{
                const {user} = await createAuthUserWithEmailAndPassword(email,password);
                await createUserDocumentFromAuth(user,{userName});
                resetFormFields();
            }catch(err){
                if(err.code === 'auth/email-already-in-use'){
                    alert('email already in use');
                }else{
                    console.log(err);
                }
            }
        }else{
                alert('passwords do not match');
        }
    }
    return(
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput type="text" 
                label="User Name"
                required 
                onChange={handleChange}
                name="userName"
                value={userName}/>

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

                
                <FormInput
                type="password" 
                required
                label="Confirm Password" 
                onChange={handleChange}
                name="confirmPassword"
                value={confirmPassword}/>

                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    )
}