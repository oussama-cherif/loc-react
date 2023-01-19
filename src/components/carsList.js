import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CarDetails from './CarDetails'

const CarsList = () => {
    const [cars, setCars] = useState([])


    useEffect(() => {
        const fetchCars = async () => {
            try {
                const res = await axios.get('http://localhost:3500/cars')
                setCars(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchCars()
    }, [])

    return (
        <div className="cars">
            {cars && cars.map((car) => (
                <CarDetails key={car._id} car={car} setCars={setCars}/>
            ))}
        </div>
    )
}

export default CarsList
