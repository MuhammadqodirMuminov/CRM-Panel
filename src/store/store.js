import { configureStore } from '@reduxjs/toolkit';

import AuthReducer from '../slice/authSlice';
import courseSlice from '../slice/courseSlice';

export const store = configureStore({
	reducer: {
		auth: AuthReducer,
		course: courseSlice,
	},
	// eslint-disable-next-line no-undef
	devTools: process.env.NODE_ENV != 'production',
});
