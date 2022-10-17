import "./Layout.css";
import { Outlet } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useEffect, useLayoutEffect, useState } from "react";
import Navbar from "../navbar/Navbar";

const firebaseConfig = {
  apiKey: "AIzaSyAJ377kcLCwWXlnYgheMgquKXgIMAvrKPQ",
  authDomain: "medi-75fc7.firebaseapp.com",
  projectId: "medi-75fc7",
  storageBucket: "medi-75fc7.appspot.com",
  messagingSenderId: "924840444404",
  appId: "1:924840444404:web:f84bfd39afbd46501379a1",
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

const auth = getAuth(app);
provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

const Layout = () => {
  const signInWithGoogle = () => {
    console.log("running");
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      })
      .catch((error) => {
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
  };

  return (
    <section id="hero">
      <header>
        <div className="container">
          <Navbar signInWithGoogle={signInWithGoogle} />
        </div>
      </header>

      <div className="container">
        <Outlet />
      </div>
    </section>
  );
};

export default Layout;
