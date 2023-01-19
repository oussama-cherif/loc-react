import React, { useState } from 'react'
import axios from 'axios'

const AddCarForm = () => {
  const [error, setError] = useState(null)
    const [formData, setFormData] = useState({
        marque: '',
        modele: '',
        numSerie: '',
        couleur: '',
        matricule: '',
        km: 0
    })

    const { marque, modele, numSerie, couleur, matricule, km } = formData

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const handleSubmit = async e => {
      e.preventDefault()
      try {
          const config = {
              headers: {
                  'Content-Type': 'application/json'
              }
          }
          const body = JSON.stringify({
            ...formData,
            km: parseInt(formData.km)
          });
          console.log(body)
          await axios.post('http://localhost:3500/cars', body, config)
          .then(res => {
              console.log(res.data)
              setError(null)
              setFormData({
                  marque: '',
                  modele: '',
                  numSerie: '',
                  couleur: '',
                  matricule: '',
                  km: 0
              })
          })
      } catch (err) {
          console.error(err.response.data)
          setError(err.response.data.message)
      }
  }

    return (
      <>
      <h3>Ajouter une voiture</h3>
      <form className="create-car" onSubmit={handleSubmit}>
        <label>Marque:</label>
                <input
                    type='text'
                    name='marque'
                    value={marque}
                    onChange={onChange}
                    required
                />
        <label>Modéle:</label>
                <input
                    type='text'
                    name='modele'
                    value={modele}
                    onChange={onChange}
                    required
                />
        <label>Numéro de série:</label>
                <input
                    type='text'
                    name='numSerie'
                    value={numSerie}
                    onChange={onChange}
                    required
                />
        <label>Couleur:</label>
                <input
                    type='text'
                    name='couleur'
                    value={couleur}
                    onChange={onChange}
                    required
                />
        <label>Matricule:</label>
                <input
                    type='text'
                    name='matricule'
                    value={matricule}
                    onChange={onChange}
                    required
                />
        <label>Nombre de kilométre:</label>
                <input
                    type='number'
                    name='km'
                    value={km}
                    onChange={onChange}
                    required
                />
            <button type='submit'>Ajouter</button>
            {error && <div className="error">{error}</div>}
        </form>
        </>
    )
}

export default AddCarForm
