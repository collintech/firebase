import React from 'react'

import './deletecar.css'

const DeleteCar = ({ car, deleteCar }) => {

    return (
        <div>
            <button onClick={() => deleteCar(car)}>Delete Movie</button>
        </div>
    )
}

export default DeleteCar