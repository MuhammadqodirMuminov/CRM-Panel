import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoading: false,
	branches: null,
	courses: null,
	error: null,
	newCourse: null,
};

const CourseSlice = createSlice({
	name: 'Course',
	initialState,
	reducers: {
		getCoursestart: state => {
			state.isLoading = true;
		},
		getCoursesSuccess: (state, action) => {
			state.isLoading = false;
			state.branches = action.payload[0];
			state.courses = action.payload[1];
		},
		getCourseFailore: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
		addCourseSuccess: (state, action) => {
			state.isLoading = false;
			state.newCourse = action.payload;
		},
	},
});
export const { getCoursesSuccess, getCourseFailore, addCourseSuccess, getCoursestart } =
	CourseSlice.actions;
export default CourseSlice.reducer;
