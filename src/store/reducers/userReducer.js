import {createSlice} from '@reduxjs/toolkit'

const initialState = {
	
	name: '',
	email: '',
	tel: '',
	message: '',
	submitting: false,
	submitted: false,
	error: null

	// users: [],
	// loading: false,
	// error: null,
};

// export const userActions = {
// 	ADD_USER: "ADD_USER",
// 	REMOVE_USER: "REMOVE_USER",
// 	FETCHING_USERS: "FETCHING_USERS",
// 	ERROR_USER: "ERROR_USER",
// };

// export const userReducer = (state = initialState, action) => {
// 	switch (action.type) {
// 		case userActions.FETCHING_USERS:
// 			return { loading: true, error: null, users: state.users };
// 		case userActions.ADD_USER:
// 			return {
// 				loading: false,
// 				error: null,
// 				users: [...state.users, ...action.payload],
// 			};
// 		case userActions.ERROR_USER:
// 			return {
// 				loading: false,
// 				error: action.payload,
// 				users: [],
// 			};
// 		case userActions.REMOVE_USER:
// 			return {
// 				loading: false,
// 				error: null,
// 				users: state.users.filter((user) => user.id !== action.payload),
// 			};
// 		default:
// 			return state;
// 	}
// };

const feedbackSlice = createSlice({
	name: 'feedback',
	initialState,
	reducers: {
		updateField(state, action) {
			state[action.payload.name] = action.payload.value;
		},
		submitFeedbackStart(state) {
			state.submitting = true;
			state.error = null;
		},
		submitFeedbackSuccess(state) {
			state.submitting = false;
			state.submitted = true;
		},
		submitFeedbackFailure(state, action) {
			state.submitting = false;
			state.error = action.payload;
		}
	}
});

export const {updateField, submitFeedbackStart, submitFeedbackSuccess, submitFeedbackFailure} = feedbackSlice.actions;
export default feedbackSlice.reducer;
