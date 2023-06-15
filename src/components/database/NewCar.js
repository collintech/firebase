import React from 'react'

import './newcar.css'

const NewCar = ({ setNewMake, setNewcolor, setNewModel, isAnSuv, setisAnSuv, submitCar }) => {

    return (
        <div className='new-car'>
            <input placeholder='new car make...' onChange={(e) => setNewMake(e.target.value)} />
            <input placeholder='new car color...' onChange={(e) => setNewcolor(e.target.value)} />
            <input placeholder='new car model...' onChange={(e) => setNewModel(e.target.value)} />
            <input type='checkbox' checked={isAnSuv} placeholder='add a new car...' onChange={(e) => setisAnSuv(e.target.checked)} />
            <button onClick={submitCar}>Submit Car</button>
        </div>
    )
}

export default NewCar