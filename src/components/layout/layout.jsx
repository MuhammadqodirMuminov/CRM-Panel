import Aside from '../aside/aside';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
	return (
		<main className='d-flex align-items-start'>
			<Aside  />

			<article className='w-100'> 
				<section className=''>
					<div className='navbar navbar-expand-lg navbar-light bg-white'>
						<div className='container-fluid'>
						<h2>Xisobot</h2>
						</div>
					</div>
				</section>

				{children}
			</article>
		</main>
	);
};

export default Layout;
