import axios from "./api";

const StudentService = {
	studentAll: async  () => {
		const data = await axios.get('/students')
		return data
	},
};

export default StudentService