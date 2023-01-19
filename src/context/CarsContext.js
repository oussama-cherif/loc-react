import { createContext, useReducer } from 'react'

export const CarsContext = createContext()

export const carsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CARS': 
      return {
        cars: action.payload
      }
    case 'CREATE_CAR':
      return {
        cars: [action.payload, ...state.cars]
      }
    case 'DELETE_CAR':
      return {
        cars: state.cars.filter((w) => w._id !== action.payload._id)
      }
    default:
      return state
  }
}

export const CarsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(carsReducer, {
    cars: null
  })

  return (
    <CarsContext.Provider value={{...state, dispatch}}>
      { children }
    </CarsContext.Provider>
  )
}