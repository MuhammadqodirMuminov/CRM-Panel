import Aside from '../aside/aside';
import styles from './layout.module.css';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
	return (
		<div className={styles.container}>
			<main className='d-flex align-items-start'>
				<Aside />

				<article className={styles.article}>
					<section className={styles.header}>
						<h2 className='m-0'>Xisobot</h2>
					</section>

					{children}
				</article>
			</main>
		</div>
	);
};

export default Layout;
