import React, { useState } from 'react'
import './storage.css'
import { storage } from '../../config/firebase'
import { ref, uploadBytes } from 'firebase/storage'

const Storage = () => {
    const [file, setFile] = useState(null)

    const sendFile = async () => {
        try {
            const fileRef = ref(storage, `myFiles/${file}`)
            await uploadBytes(fileRef, file)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div className='storage'>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <button onClick={sendFile}>Submit File</button>
        </div>
    )
}

export default Storage