export default function reducer (state, action) {
    switch (action.type) {
      case "UPDATE_VALUES":
        console.log([action.type])
        return {
               
            ...state, [action.payload.name]: action.payload.value
        };
  
      case "CALCULATE":
        return {
          ...state,
          percentComplete: action.payload
        };
  
      case "TOGGLE_HAS_DETAILS":
        return {
          ...state,
          hasDetails: !state.hasDetails
        };
  
      case "NEXT_BOOKABLE":
        const count = state.bookables.filter(b => b.group === state.group).length;
        return {
          ...state,
          bookableIndex: (state.bookableIndex + 1) % count
        };
  
      default:
        return state;
    }
  }