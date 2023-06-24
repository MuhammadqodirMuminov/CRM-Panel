import axios from './api';

const courseService = {
	getBranches: async () => {
		const { data } = await axios.get('/admin/branches');
		return data;
	},
	getCourses: async () => {
		const { data } = await axios.get('/admin/courses');
		return data;
	},
	addCourse: async () => {
		const { data } = await axios.post('/admin/course')
		return data
	}
};

export default courseService;
