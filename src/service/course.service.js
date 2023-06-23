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
};

export default courseService;
