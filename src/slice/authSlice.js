import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoading: false,
	isLoggenIn: false,
	user: null,
	error: null,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		loginUserStart: state => {
			state.isLoading = true;
		},
		loginUserSuccess: (state, action) => {
			state.isLoading = false;
			state.isLoggenIn = true;
			state.user = action.payload;
		},
		loginUserFailore: (state, action) => {
			state.isLoading = true;
			state.error = action.payload;
		},
	},
});

export const { loginUserStart, loginUserSuccess, loginUserFailore } = authSlice.actions;
export default authSlice.reducer;
