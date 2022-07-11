import { initializeApp } from "firebase/app";
import {
getAuth,
signInWithPopup,
GoogleAuthProvider,createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged
} from 'firebase/auth';
import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyA7TuWqQFagswLkycHeQB7YIghCLoeBjyM",
    authDomain: "aniflix-anime-app.firebaseapp.com",
    projectId: "aniflix-anime-app",
    storageBucket: "aniflix-anime-app.appspot.com",
    messagingSenderId: "925265352047",
    appId: "1:925265352047:web:8d3689a8f5ae2dfbcd449a"
  };


const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
      prompt: "select_account"
  });

  export const auth = getAuth();

// allows to sign in with google via the pop up
  export const signInWithGooglePopUp = () => signInWithPopup(auth,provider);

// initializes the firestore database
export const db = getFirestore();


// creating a user and adding to the database
export const createUserDocumentFromAuth = async(userAuth,additionalInfo) => {
    const userDocRef = doc(db,'users',userAuth.uid);
    const userSnapShot = await getDoc(userDocRef);
    if(!userSnapShot.exists()){
        const {userName,email} = userAuth;
        const createdAt = new Date();
        try{
            await setDoc(userDocRef, {
                userName,
                email,
                createdAt,
                ...additionalInfo
            })
        }catch(err){
            console.log(err);
        }
    }
    return userDocRef;
  }

// authenticating the user with email and password before adding to the database.
  export const createAuthUserWithEmailAndPassword = async (email,password) => {
      if(!email || !password) return;
      return await createUserWithEmailAndPassword(auth,email,password)
  }
// signing in a user with email and password
  export const signInAuthUserWithEmailAndPassword = async (email,password) => {
    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth,email,password)
}

// signing out a user
export const signOutUser = async() => await signOut(auth);

// event listner which fires every time the user signs in or signs out
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth,callback);