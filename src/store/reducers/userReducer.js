import {createSlice} from '@reduxjs/toolkit'

const initialState = {
	
	name: '',
	email: '',
	tel: '',
	message: '',
	submitting: false,
	submitted: false,
	error: null
};

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
