import * as SessionApiUtil from '../util/sessionApiUtil';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
})

export const logoutCurrentUser = (user) => ({
  type: LOGOUT_CURRENT_USER,
  user
})

export const singup = (user) => dispatch => {
  return SessionApiUtil.signup(user).then(
    user => dispatch(receiveCurrentUser(user)), 
    error => console.log(error)
  )
}

export const login = (user) => dispatch => {
  return SessionApiUtil.login(user).then(
    user => dispatch(receiveCurrentUser(user)), 
    error => console.log(error)
  )
}

export const logout = () => dispatch => {
  return SessionApiUtil.logout().then(
    user => dispatch(logoutCurrentUser(user)), 
    error => console.log(error)
  )
}