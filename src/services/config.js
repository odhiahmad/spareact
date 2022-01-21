import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDphywEpKq_KdZbjjPsZJ-EG2I9FPiB5yw",

  authDomain: "belajarreact-52646.firebaseapp.com",

  databaseURL: "https://belajarreact-52646-default-rtdb.firebaseio.com",

  projectId: "belajarreact-52646",

  storageBucket: "belajarreact-52646.appspot.com",

  messagingSenderId: "571514754772",

  appId: "1:571514754772:web:5f3e5bdd6ffc15f16f0d41",

  measurementId: "G-MVJ06PHVT7",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
