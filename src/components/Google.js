import React, { useState } from 'react'
import { googleProvider, auth } from '../config/firebase'
import { signInWithPopup, signOut } from 'firebase/auth'
import './google.css'

const Google = () => {
    const [user, setUser] = useState(auth?.currentUser?.displayName)

    const login = async () => {
        try {
            const authenticated = await signInWithPopup(auth, googleProvider)
            console.log(authenticated)
            setUser(authenticated)
        } catch (err) {
            console.error(err)
        }
    };

    const logout = async () => {
        try {
            await signOut(auth)
        } catch (err) {
            console.error(err)
        }
    };

    console.log(user)

    return (
        <div className='google'>
            <div>
                <legend>Google Authentication</legend>
                <button onClick={login}>Login</button>
                <button onClick={logout}>Logout</button>
            </div>
            <div>
                {user ? user : "You are not signed in"}
            </div>
        </div>
    )
}

export default Google