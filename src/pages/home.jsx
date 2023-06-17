import { Layout } from '../components';
import styles from './home.module.css'
import icon from '.././assets/icon.svg'

const Home = () => {
	return (
		<Layout>
			
				
				<div className="container-fluid">
				<div className={styles.report__inner}>
					<div className="row" style={{rowGap: "25px"}}>
						<div className="col-12 col-sm-12 col-md-12 col-lg-6">
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
						<div className="col-12 col-sm-12 col-md-12 col-lg-6">
							<div className={styles.report__card}>
								<div>
									<h3 className={styles.report__title}>O’qituvchilar soni:</h3>
									<strong className={styles.report__count}>10 ta</strong>
								</div>
								<div className={styles.report__ellipse}>
									<img src={icon} alt="" />
								</div>
							</div>
						</div>
						<div className="col-12 col-sm-12 col-md-12 col-lg-6">
							<div className={styles.report__card}>
								<div>
									<h3 className={styles.report__title}>Shu oy tark etganlar</h3>
									<strong className={styles.report__count}>60 ta</strong>
								</div>
								<div className={styles.report__ellipse}>
									<img src={icon} alt="" />
								</div>
							</div>
						</div>
						<div className="col-12 col-sm-12 col-md-12 col-lg-6">
							<div className={styles.report__card}>
								<div>
									<h3 className={styles.report__title}>Jami guruhlar soni</h3>
									<strong className={styles.report__count}>26 ta</strong>
								</div>
								<div className={styles.report__ellipse}>
									<img src={icon} alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
				</div>
			
			
		</Layout>
	);
};

export default Home;
