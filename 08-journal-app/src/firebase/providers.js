import { GoogleAuthProvider } from "firebase/auth";
import { FirebaseAuth } from "./config";

 const googleProvider = new GoogleAuthProvider();

 export const singInWithGoogle = async() => {

    try {
        const result = await singInWithGoogle(FirebaseAuth, googleProvider);
        const credentials = GoogleAuthProvider.credentialFromResult(result);
        console.log({ credentials });
    } catch (error) {
        console.log(error);
        console.log(response)
    }
 }