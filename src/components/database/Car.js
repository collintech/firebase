import React, { useEffect, useState } from 'react'
import { db } from '../../config/firebase'
import { collection, getDocs, deleteDoc, doc, addDoc, updateDoc } from 'firebase/firestore'
import NewCar from './NewCar'
import DeleteCar from './DeleteCar'
import UpdateCar from './UpdateCar'

import './car.css'

const Car = () => {

    const [carList, setCarList] = useState([]);
    const docRef = collection(db, "car")



    const [newcolor, setNewcolor] = useState("")
    const [newMake, setNewMake] = useState("")
    const [newModel, setNewModel] = useState("")
    const [isAnSuv, setisAnSuv] = useState(false);

    const [updatecar, setUpdateCar] = useState("")

    // const carRef = collection(db, "car")


    const getCars = async () => {
        try {
            const data = await getDocs(docRef)
            const filteredData = data.docs.map((car) => ({ ...car.data(), id: car.id }))
            setCarList(filteredData)
        } catch (err) {
            console.error(err)
        }
    };

    useEffect(() => {
        getCars();
    }, []);

    const deleteCar = async (id) => {
        try {
            const carRef = doc(db, "car", id)
            await deleteDoc(carRef)
        } catch (err) {
            console.error(err)
        }
    };


    const submitCar = async () => {
        try {
            await addDoc(docRef, { make: newMake, color: newcolor, model: newModel, isAnSuv: isAnSuv })
        } catch (err) {
            console.error(err)
        }
    };


    const carUpdate = async (id) => {
        try {
            const carRef = doc(db, "car", id)
            await updateDoc(carRef, { make: updatecar })
        } catch (err) {
            console.error(err)
        }
    };



    return (
        <div className='cars'>
            <div>
                <NewCar submitCar={submitCar} setNewMake={setNewMake} setNewModel={setNewModel} setNewcolor={setNewcolor} setisAnSuv={setisAnSuv} />
            </div>
            <div className='car-cta'>
                {carList.map((car) => {
                    return (
                        <ul key={car.id}>
                            <li style={{ color: isAnSuv ? "green" : "red" }}>{car.make}</li>
                            <li>{car.color}</li>
                            <li>{car.model}</li>

                            <UpdateCar carUpdate={carUpdate} setUpdateCar={setUpdateCar} car={car.id} />
                            <DeleteCar deleteCar={deleteCar} car={car.id} />
                        </ul>
                    )
                })}
            </div>
        </div>
    )
}


export default Car