import React from 'react'

const CarDetails = ({ car }) => {
    return (
        <div  className="car-details">
            <h4>{car.marque} {car.modele}</h4>
            <p>Numéro de série: {car.numSerie}</p>
            <p>Couleur: {car.couleur}</p>
            <p>Matricule: {car.matricule}</p>
            <p>Kilométrage: {car.km}</p>
        </div>
    )
}

export default CarDetails
