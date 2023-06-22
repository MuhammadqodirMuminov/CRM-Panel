import { configureStore } from '@reduxjs/toolkit';

import AuthReducer from '../slice/authSlice';
export const store = configureStore({
	reducer: {
		auth: AuthReducer,
	},
	// eslint-disable-next-line no-undef
	devTools: process.env.NODE_ENV != 'production',
});
