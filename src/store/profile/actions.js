import {
  TOGGLE_VISIBLE_PROFILE,
  UPDATE_PROFILE,
  TOGGLE_VISIBLE_FORM,
} from './types'

export const toggleVisibleProfile = () => {
  return { type: TOGGLE_VISIBLE_PROFILE }
}

export const updateProfile = (form) => {
  return { type: UPDATE_PROFILE, payload: form }
}
export const toggleVisibleForm = () => {
  return { type: TOGGLE_VISIBLE_FORM }
}
