import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Route, Routes } from 'react-router-dom';
import { Courses, Groups, Home, Payments, Students } from './pages';

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/students' element={<Students />} />
				<Route path='/groups' element={<Groups />} />
				<Route path='/payments' element={<Payments />} />
				<Route path='/courses' element={<Courses />} />
			</Routes>
		</>
	);
};

export default App;
