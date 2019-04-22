import { post, get } from '../utils';
import appConst from '../Constants/app';

// FETCHING BOXES
const fetchBoxesStart = () => {
  return {
    type: appConst.FETCH_BOXES_STARTED,
  }
};
const fetchBoxesComplete = (payload) => {
  return {
    type: appConst.FETCH_BOXES_COMPLETED,
    payload
  }
};
const fetchBoxesFailure = () => {
  return {
    type: appConst.FETCH_BOXES_FAILED
  }
};

export const fetchBoxes = () => {
  return dispatch => {
    dispatch(fetchBoxesStart())
    return get('/boxinator/boxes')
      .then(res => dispatch(fetchBoxesComplete(res)))
      .catch(() => dispatch(fetchBoxesFailure()))
  }
}


// SAVING BOX
const saveBoxStart = () => {
  return {
    type: appConst.SAVE_BOX_STARTED
  }
};
const saveBoxComplete = (payload) => {
  return {
    type: appConst.SAVE_BOX_COMPLETED,
    payload
  }
};
const saveBoxFailure = () => {
  return {
    type: appConst.SAVE_BOX_FAILED,
  }
};

export const saveBox = (data) => {
  return dispatch => {
    dispatch(saveBoxStart())
    return post('/boxinator/boxes', data)
      .then(res => dispatch(saveBoxComplete(res)))
      .catch(() => dispatch(saveBoxFailure()))
  }
}



