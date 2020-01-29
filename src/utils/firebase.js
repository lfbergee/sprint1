import React, { createContext, useState } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed
} from "@react-firebase/auth";

require('dotenv').config();

export const FirebaseContext = createContext(null);

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

export default ({ children }) => {
  const [hasFailed, setFailed] = useState(false);

  return (
    <FirebaseAuthProvider {...config} firebase={firebase}>
      <nav>
        <button
          className="jkl-button jkl-button--primary"
          onClick={() => {
            const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(googleAuthProvider);
          }}
        >
          Logg inn
        </button>
        <button
          className="jkl-button jkl-button--secondary"
          onClick={() => {
            firebase.auth().signOut();
          }}
        >
          Logg ut
        </button>
        <FirebaseAuthConsumer>
          {({ user }) => {
              console.log(user, process.env.REACT_APP_APPROVED_USER)
            if (user && user.email !== process.env.REACT_APP_APPROVED_USER) {
              setFailed(true);
              firebase.auth().signOut();
            }
          }}
        </FirebaseAuthConsumer>
      </nav>
        <p>{hasFailed && "Not autorized to view this content, request access with Glenn"}</p>
      <IfFirebaseAuthed>{children}</IfFirebaseAuthed>
    </FirebaseAuthProvider>
  );
};
