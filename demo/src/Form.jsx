import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { auth, googleAuthProvider } from './Firestore-confing';

function Form() {
    const login = async() => {
        try{
            let result = await signInWithPopup(auth,googleAuthProvider);
        }catch(err){
            console.log(err);
            return false
        } 
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="box">
                        <img src="https://wp.mridul.tech/wp-content/uploads/2023/02/react-js.png"/>
                        <h1>Sign In With Google In React</h1>
                        <div className="button">
                            <button onClick={ () => login()}><FcGoogle style={{margin : '5px'}}/>Sign In With Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form