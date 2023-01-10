import { singInWithGoogle } from "../firebase/providers";
import { checkingCredentials } from "./auth";

export const checkingAuthetication = ( email, password ) => {
    return async ( dispatch ) => {
        dispatch( checkingCredentials() );

    }
}

export const startGoogleSignIn = () => {
    return async ( dispatch ) => {
        dispatch( checkingCredentials() );

        const result = singInWithGoogle();
    }
}