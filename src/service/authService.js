import axios from "./api";

const AuthService = {
	userLogin: async  () => {
		const data = await axios.post('/login')
		return data
	},
};

export default AuthService