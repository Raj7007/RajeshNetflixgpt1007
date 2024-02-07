import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { auth } from './Utils/firebase'
import { getAuth, signOut } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from './Consts';
const Header = () => {
  const navigate=useNavigate()
  const data=useSelector((state)=>state.user)
  const dispatch=useDispatch()
  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));

        navigate("/browser")

      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/")
      }
    });

    // Cleanup function to unsubscribe when the component is unmounted
    return () => unsubscribe();
  }, []);


  const handleSignOut=()=>{

    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      navigate("/error")
    });
  }
 
  return (
    <div className=' px-8 py-2  bg-gradient-to-b from-black to-transparent flex justify-between ' >
      <div>
        <img className='w-18 h-14  bg-gradient-to-b from-black ' src={LOGO} />
      </div>
     {data && (<div>
        <img className='w-12 h-12  bg-gradient-to-b  ' src={data?.photoURL} />
        <button onClick={() => handleSignOut()}> Sign out</button>
        <p className='text-xl'>{data?.displayName}</p>
        </div>)}
    </div>
  )
}

export default Header