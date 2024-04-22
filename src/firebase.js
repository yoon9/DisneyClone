// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvElfQkX4VP5PXibA7Alsx8cMWh1l2e00",
  authDomain: "disneyclone-72280.firebaseapp.com",
  projectId: "disneyclone-72280",
  storageBucket: "disneyclone-72280.appspot.com",
  messagingSenderId: "936669155795",
  appId: "1:936669155795:web:b10e55fde96a8d6f10df26",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export default app
