const initialState = {
  isLoading: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_BOX_STARTED':
      return {
        ...state,
        isLoading: true
      }
    case 'SAVE_BOX_COMPLETED':
      return {
        ...state,
        boxInformation: action.requestData,
        isLoading: false
      }
    case 'FETCH_BOXES_STARTED':
      return {
        ...state,
        isLoading: true
      }
    case 'FETCH_BOXES_COMPLETED':
      return {
        ...state,
        boxList: action.payload,
        isLoading: false
      }

    default:
      return state
  }
}

