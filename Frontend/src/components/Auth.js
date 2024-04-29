import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from './firebaseConfig';

const auth = getAuth(app);

// Sign in with Google
export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

export default auth;