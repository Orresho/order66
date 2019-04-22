import appConst from '../Constants/app';

const initialState = {
  boxList: [],
  isLoading: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case appConst.SAVE_BOX_STARTED:
      return {
        ...state,
        isLoading: true,
      }

    case appConst.SAVE_BOX_COMPLETED:
      return {
        ...state,
        error: action.payload,
        boxList: [...state.boxList, action.payload.data],
        isLoading: false,
      }

    case appConst.SAVE_BOX_FAILED:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      }

    case appConst.FETCH_BOXES_STARTED:
      return {
        ...state,
        isLoading: true
      }

    case appConst.FETCH_BOXES_COMPLETED:
      return {
        ...state,
        boxList: action.payload.data,
        isLoading: false,
      }
    case appConst.FETCH_BOXES_FAILED:
      return {
        ...state,
        isLoading: false,
      }

    default:
      return state
  }
}

