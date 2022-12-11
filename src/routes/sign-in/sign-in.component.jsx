import { signInWithGooglePopup , createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils.js";

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h1>sing in</h1>
            <button onClick={logGoogleUser}>Sing in with Google</button>
        </div>
    );
}

export default SignIn;