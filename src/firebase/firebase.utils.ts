import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

export interface IUserAuth {
  uid: string;
  displayName: string;
  email: string;
}

const firebaseConfig = {
  apiKey: "AIzaSyC5KJX3RHL-pWDDtG69aml4cPW9swZsDFk",
  authDomain: "ztm-shop-f2ac3.firebaseapp.com",
  projectId: "ztm-shop-f2ac3",
  storageBucket: "ztm-shop-f2ac3.appspot.com",
  messagingSenderId: "334509013264",
  appId: "1:334509013264:web:be6e19716696ab3e378d95",
  measurementId: "G-F7LX451FFJ",
};

initializeApp(firebaseConfig);

export const firestore = getFirestore();
export const provider = new GoogleAuthProvider();
export const auth = getAuth();

export const createUserProfileDocument = async (
  userAuth: IUserAuth,
  additionalData?: {}
) => {
  if (!userAuth) return;

  const userRef = doc(firestore, `users/${userAuth.uid}`);
  const snapShot = await getDoc(userRef);

  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.error(err);
    }
  }

  return userRef;
};

export const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, provider);
    // const credential = GoogleAuthProvider.credentialFromResult(res);
    // const token = credential?.accessToken;
    // const user = res.user;

    console.log(res);
  } catch (err) {
    console.error(err);
  }
};
