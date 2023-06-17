import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages';

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</>
	);
};

export default App;
