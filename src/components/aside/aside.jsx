import styles from './aside.module.css';
import { NavLink } from 'react-router-dom';
import SidebarHome from '@images/sidebar-home.svg'
import SidebarToggleMenu from '@images/menu-toggle.svg'
import SidebarContact from '@images/sidebar-contact.svg'
import SidebarEdu from '@images/sidebar-edu.svg'
import SidebarUsers from '@images/sidebar-users.svg'
import SidebarCard from '@images/sidebar-card.svg'
import SidebarAtt from '@images/sidebar-att.svg'
import { useState } from 'react';


const Aside = () => {
	const [menu, setMenu] = useState(false)

	return (
		<div className={styles.relative}>
			<div className={styles.aside}>
				<div className='w-100'>
					<div className={styles.sidebar}>
						<div className={styles.sidebar__top}>
							<div className={styles.sidebar__inner}>
								<img src={SidebarContact} width={48} height={48} alt="Sidebar contact image" />
								<h2 className={styles.sidebar__title}>CRM PANEL</h2>
								<button>
									<img src={SidebarToggleMenu} width={32} height={32} alt="Toggle menu button" />
								</button>
							</div>
						</div>

						<ul className={styles.sidebar__list}>
							<li className={styles.sidebar__item}>
								<NavLink activeClassName={styles.active} className={styles.sidebar__link}  to={'#'} >
									<img src={SidebarHome} width={20} height={20} alt="Sidebar home image" />				
									Xisobotlar
								</NavLink>
							</li>
							<li className={styles.sidebar__item}>
								<NavLink activeClassName={styles.active} className={styles.sidebar__link} to={'#'} >
									<img src={SidebarEdu} width={20} height={20} alt="Sidebar home image" />
									O’quvchilar
								</NavLink>
							</li>
							<li className={styles.sidebar__item}>
								<NavLink activeClassName={styles.active} className={styles.sidebar__link} to={'#'} >
									<img src={SidebarUsers} width={20} height={20} alt="Sidebar home image" />				
									Guruhlar
								</NavLink>
							</li>
							<li className={styles.sidebar__item}>
								<NavLink activeClassName={styles.active} className={styles.sidebar__link} to={'#'} >
									<img src={SidebarCard} width={20} height={20} alt="Sidebar home image" />
									To’lovlar
								</NavLink>
							</li>
							<li className={styles.sidebar__item}>
								<NavLink activeClassName={styles.active} className={styles.sidebar__link} to={'#'} >
									<img src={SidebarAtt} width={20} height={20} alt="Sidebar home image" />
									Davomat
								</NavLink>
							</li>
						</ul>
				</div>
				</div>
			</div>
		</div>
	);
};

export default Aside;
