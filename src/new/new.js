// ====== IMPORTS ======

// Firebase
import { initializeApp } from "firebase/app";
import firebaseConfig from '../../config/firebaseConfig';
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";

// ====== INIT ======

// Firebase
const provider = new GoogleAuthProvider();
const app = initializeApp(firebaseConfig);
console.log('getting auth');
const auth = getAuth();
auth.languageCode = 'en';


// ====== LISTENERS ======

onAuthStateChanged(auth, handleAuthChange)

document.querySelector('.signOutBtn').addEventListener('click', handleSignOut);
document.querySelector('.signInBtn').addEventListener('click', handleSignIn);


// ====== FUNCTIONS ======


function handleSignOut () {
    signOut(getAuth());
}

function handleSignIn () {
    signInWithPopup(auth, provider)
    .then((result) => {
        const user = result.user;
    }).catch((error) => {
        console.log(error);
    }); 
}

function handleAuthChange (user) {
    if (user) {
        showSignedIn(user);
    } else {
        hideSignedIn();
    }
}

function showSignedIn (user) {
    // Username
    const usernameSpan = document.querySelector('.username');
    usernameSpan.innerText = user.displayName;
    const userInput = document.querySelector('#user');
    userInput.value = user.displayName;

    // Show div
    const authStatusDiv = document.querySelector('.authStatus');
    authStatusDiv.style.display = 'block';

    // Show signOutBtn
    const signOutBtn = document.querySelector('.signOutBtn');
    signOutBtn.style.display = 'block';

    // Show form
    const form = document.querySelector('form');
    form.style.display = 'flex';

    // Hide signedInBtn
    const signInBtn = document.querySelector('.signInBtn');
    signInBtn.style.display = 'none'

    // Hide sign in message
    const signInMsg = document.querySelector('.signInMsg');
    signInMsg.style.display = 'none';
}

function hideSignedIn () {
        // Username
        const usernameSpan = document.querySelector('.username');
        usernameSpan.innerText = '';
        const userInput = document.querySelector('#user');
        userInput.value = '';
    
        // Hide div
        const authStatusDiv = document.querySelector('.authStatus');
        authStatusDiv.style.display = 'none';
    
        // Hide signOutBtn
        const signOutBtn = document.querySelector('.signOutBtn');
        signOutBtn.style.display = 'none';

        // Hide form
        const form = document.querySelector('form');
        form.style.display = 'none';

        // Show signInBtn
        const signInBtn = document.querySelector('.signInBtn');
        signInBtn.style.display = 'block';

        // Show sign in message
        const signInMsg = document.querySelector('.signInMsg');
        signInMsg.style.display = 'block';
}