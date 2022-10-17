import './home.css';
import Navbar from '../navbar/Navbar';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useEffect, useLayoutEffect, useState } from 'react';

const firebaseConfig = {
    apiKey: "AIzaSyAJ377kcLCwWXlnYgheMgquKXgIMAvrKPQ",
    authDomain: "medi-75fc7.firebaseapp.com",
    projectId: "medi-75fc7",
    storageBucket: "medi-75fc7.appspot.com",
    messagingSenderId: "924840444404",
    appId: "1:924840444404:web:f84bfd39afbd46501379a1"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

const auth = getAuth(app);
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');


const Home = () => {




    const signInWithGoogle = () => {
        console.log("running")
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // ...
            }).catch((error) => {
                console.log(error);
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    return (
        <div className="hero_container">
                    <div className="hero_content">
                        <h1 className="section-heading">Stay Productive & Work Remotely</h1>
                        <p className="text-light">The key to work-from-home success is to create an enviroment that allows you to focus on
                            the tasks at hand. Whether you are working from home for the first time.</p>
                        <a href="#!" className="cta_btn">Learn More</a>
                    </div>
                    <div className="hero_image">
                        <img src="./images/image.svg" alt="Image" className="hero-img" />
                    </div>
        </div>
    )

}

export default Home;