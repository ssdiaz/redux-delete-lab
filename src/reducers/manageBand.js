export default function manageBand(state = {
  bands: [],
}, action) {
  switch(action.type) {
    case "ADD_BAND":

      const band = { id: Math.random(), name: action.name }

      return { ...state, bands: [...state.bands, band] }
    
    
    case "DELETE_BAND":
      console.log(action, 'action')

      let newBands = state.bands.filter(band.id !== action.id )

      return {...state, bands: [...state.newBands] }



      default:
        return state
  
  }
};
