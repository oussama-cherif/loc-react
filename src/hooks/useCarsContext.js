import { CarsContext } from '../context/CarsContext'
import { useContext } from 'react'

export const useCarsContext = () => {
  const context = useContext(CarsContext)

  if (!context) {
    throw Error('useCarsContext must be used inside an CarsContextProvider')
  }

  return context
}