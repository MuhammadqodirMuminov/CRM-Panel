import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/';



axios.interceptors.request.use({
	Headers: {

	}
})

export default axios