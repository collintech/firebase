import React, { useState } from 'react'
import { auth } from '../config/firebase'
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import './email.css'

const Email = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    onAuthStateChanged(auth, (email) => {
        if (email) {
            console.log(email.getIdToken())
            return email.getIdToken()
        } else {
            console.log(`${email} is not signed in`)
        }
    })

    const signin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            alert("sign in successful")
        } catch (err) {
            console.error(err)
        }
    };

    const signout = async () => {
        try {
            await signOut(auth)
            alert("signed out successfully")
        } catch (err) {
            console.error(err)
            alert(err)
        }
    };

    console.log(auth?.currentUser?.email)
    return (
        <section className='email'>
            <legend>Email Authentication</legend>
            <div className='input-cta'>
                <input placeholder='email...' onChange={(e) => setEmail(e.target.value)} />
                <input type='password' placeholder='password...' onChange={(e) => setPassword(e.target.value)} />
                <button onClick={signin}>Sign In</button>
                <button onClick={signout}>Sign Out</button>
            </div>
            <div className='username'>
                {email ? auth?.currentUser?.email : "You are not signed in"}
            </div>
        </section>
    )
}

export default Email