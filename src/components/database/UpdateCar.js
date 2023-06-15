import React from 'react'

import './updatecar.css'

const UpdateCar = ({ car, carUpdate, setUpdateCar }) => {


    return (
        <div className='update-car'>
            <input placeholder='new make...' onChange={(e) => setUpdateCar(e.target.value)} />
            <button onClick={() => carUpdate(car)}>Update Make</button>
        </div>
    )
}

export default UpdateCar