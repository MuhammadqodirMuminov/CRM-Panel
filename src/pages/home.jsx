import { Layout } from '../components';
import styles from './home.module.css'
import icon from '.././assets/icon.svg'

const Home = () => {
	return (
		<Layout>
			<h1 className='text-danger'>
				<div className="report__inner">
					<div className="row">
						<div className="col-md-6">
							<div className={styles.report__card}>
								<div>
									<h3 className={styles.report__title}>Jami o’quvchilar soni:</h3>
									<strong className={styles.report__count}>255 ta</strong>
								</div>
								<div className={styles.report__ellipse}>
									<img src={icon} alt="" />
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className={styles.report__card}>
								<div>
									<h3 className={styles.report__title}>Jami o’quvchilar soni:</h3>
									<strong className={styles.report__count}>255 ta</strong>
								</div>
								<div className={styles.report__ellipse}>
									<img src={icon} alt="" />
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className={styles.report__card}>
								<div>
									<h3 className={styles.report__title}>Jami o’quvchilar soni:</h3>
									<strong className={styles.report__count}>255 ta</strong>
								</div>
								<div className={styles.report__ellipse}>
									<img src={icon} alt="" />
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className={styles.report__card}>
								<div>
									<h3 className={styles.report__title}>Jami o’quvchilar soni:</h3>
									<strong className={styles.report__count}>255 ta</strong>
								</div>
								<div className={styles.report__ellipse}>
									<img src={icon} alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</h1>
		</Layout>
	);
};

export default Home;
