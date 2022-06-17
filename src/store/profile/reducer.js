import {
  TOGGLE_VISIBLE_FORM,
  TOGGLE_VISIBLE_PROFILE,
  UPDATE_PROFILE,
} from './types'

const initialState = {
  firstName: 'firstName',
  lastName: 'lastName',
  isVisibleProfile: true,
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_VISIBLE_PROFILE:
      return {
        ...state,
        isVisibleProfile: !state.isVisibleProfile,
      }
    case UPDATE_PROFILE:
      return {
        ...state,
        ...action.payload,
      }
    case TOGGLE_VISIBLE_FORM:
      return {
        ...state,
        isVisibleForm: !state.isVisibleForm,
      }
    default:
      return state
  }
}
