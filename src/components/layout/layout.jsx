import Aside from '../aside/aside';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
	return (
		<main>
			<Aside />

			<article>
				<section>Xisobot</section>

				{children}
			</article>
		</main>
	);
};

export default Layout;
