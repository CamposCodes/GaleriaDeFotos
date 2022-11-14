import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAUGNkGUXNhGeO326KppUMpJ0n51rE9PNc",
    authDomain: "gallery-react-53f3b.firebaseapp.com",
    projectId: "gallery-react-53f3b",
    storageBucket: "gallery-react-53f3b.appspot.com",
    messagingSenderId: "712085967245",
    appId: "1:712085967245:web:41e14c1ff0322691ccadc4"
};

const firebaseApp = initializeApp(firebaseConfig);
export const storage = getStorage(firebaseApp);