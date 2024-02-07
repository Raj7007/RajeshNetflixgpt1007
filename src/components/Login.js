import React, { useRef, useState } from 'react'
import { Validation } from "./Utils/Validation"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from './Utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { USER_AVATAR } from './Consts';
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true)
  const [error, setError] = useState(null)
  const name = useRef(null)
  const email = useRef(null)
  const password = useRef(null)
  const dispatch = useDispatch()

  const handleFormSubmit = () => {

    let errorMessage = ""
    if (!isSignIn) {
      errorMessage = Validation(name.current.value, email.current.value, password.current.value)
      setError(errorMessage)

      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(user)
          updateProfile(auth.currentUser, {
            displayName: name.current.value, photoURL: USER_AVATAR
          }).then(() => {
            // Profile updated!
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({ uid, email, displayName, photoURL }))
            // ...

          }).catch((error) => {
            // An error occurred
            setError(error.message)
            // ...
          });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          setError(errorCode + "-" + errorMessage)
          // ..
        });

    } else {
      errorMessage = Validation(email.current.value, password.current.value)
      setError(errorMessage)
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user)

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          setError(errorCode + "-" + errorMessage)
        });
    }
  }
  return (
    <div>
      <div className='bg-gradient-to-b from-white'>
        <div className='absolute '>
        </div>
        <div>
          <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white text-xl' >
            <h1 className='font-bold text-3xl py-4'>{isSignIn ? "Sign In" : "SignUp"}</h1>
            {isSignIn ? null : <> <input type='text' ref={name} placeholder='FullName' className=' p-2 my-2 bg-gray-700 w-full' /><br /></>}
            <input type='text' ref={email} placeholder='Email address  ' className=' p-2 my-2 bg-gray-700 w-full' /><br />
            <input type='password' ref={password} placeholder='Password' className=' p-2 my-2 w-full bg-gray-700' /><br />
            <p className='text-red-600'>{error ? error : null}</p>
            <button className='p-4 my-4 bg-red-700 w-full' onClick={handleFormSubmit}>{isSignIn ? "Sign In" : "Sign Up"}</button>
            <p className='py-4 cursor-pointer' onClick={() => setIsSignIn(!isSignIn)} >{isSignIn ? "New to Netflix ? Sign Up Now" : "User already registered singIn now..."}</p>
          </form>
        </div>
      </div>
      <div className='bg-gradient-to-b from-white via-transparent to-transparent bg-cover bg-center bg-no-repeat' style={{ backgroundImage: 'url(https://springboard-cdn.appadvice.com/wp-content/appadvice-v2-media/2016/11/Netflix-background_860c8ece6b34fb4f43af02255ca8f225-xl.jpg)' }}>
        <img className='bg-gradient-to-b from-white via-transparent to-transparent' src='https://springboard-cdn.appadvice.com/wp-content/appadvice-v2-media/2016/11/Netflix-background_860c8ece6b34fb4f43af02255ca8f225-xl.jpg' />

      </div>


    </div>
  )
}

export default Login 