import { userActions } from "./../reducers/userReducer";

export const addUserAction = (payload) => {
    return (dispatch) => {
        dispatch({type: userActions.ADD_USER, payload})
    }
}
