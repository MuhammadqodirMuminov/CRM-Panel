import Aside from '../aside/aside';
import styles from './layout.module.css';

// eslint-disable-next-line react/prop-types
const Layout = ({ children, head }) => {
	return (
		<main className='d-flex align-items-start'>
			<Aside />

			<article className={styles.article}>
				<section className={styles.header}>
					<h2 className='m-0'>{head}</h2>
				</section>

				{children}
			</article>
		</main>
	);
};

export default Layout;
