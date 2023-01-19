import React from 'react'



const CarDetails = ({ car }) => {
    const handleClick = async () => {
        const response = await fetch(`http://localhost:3500/cars`, 
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ id: car._id })
        })
        console.log(response);
        const json = await response.json()
        
        if (response.ok) {
          console.log(json)
        }
      }
    
    return (
        <div  className="car-details">
            <div>
            <h4>{car.marque} {car.modele}</h4>
            <p>Numéro de série: {car.numSerie}</p>
            <p>Couleur: {car.couleur}</p>
            <p>Matricule: {car.matricule}</p>
            <p>Kilométrage: {car.km}</p>
            </div>
            <button className="admin-button delete-button" onClick={handleClick}>Supprimer</button>
        </div>
    )
}

export default CarDetails
