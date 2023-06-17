import styles from './aside.module.css';
import { NavLink } from 'react-router-dom';

const Aside = () => {
	return (
		<div className={styles.aside}>
			<div className='w-100 shadow'>
				<div className={styles.sidebar}></div>
				<ul className={styles.sidebar__list}>
					<li className={styles.sidebar__item}>
						<NavLink activeClassName={styles.active} className={styles.sidebar__link}  to={'#'} >Xisobotlar</NavLink>
					</li>
					<li className={styles.sidebar__item}>
						<NavLink activeClassName={styles.active} className={styles.sidebar__link} to={'#'} >O’quvchilar</NavLink>
					</li>
					<li className={styles.sidebar__item}>
						<NavLink activeClassName={styles.active} className={styles.sidebar__link} to={'#'} >Guruhlar</NavLink>
					</li>
					<li className={styles.sidebar__item}>
						<NavLink activeClassName={styles.active} className={styles.sidebar__link} to={'#'} >To’lovlar</NavLink>
					</li>
					<li className={styles.sidebar__item}>
						<NavLink activeClassName={styles.active} className={styles.sidebar__link} to={'#'} >Davomat</NavLink>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Aside;
