import SidebarToggleMenu from '@images/menu-toggle.svg';
import SidebarAtt from '@images/sidebar-att.svg';
import SidebarCard from '@images/sidebar-card.svg';
import SidebarContact from '@images/sidebar-contact.svg';
import SidebarEdu from '@images/sidebar-edu.svg';
import SidebarHome from '@images/sidebar-home.svg';
import SidebarUsers from '@images/sidebar-users.svg';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './aside.module.css';

const Aside = () => {
	const [menu, setMenu] = useState(false);

	return (
		<div className={`${styles.relative} ${menu ? styles['menu-toggle'] : ''}`}>
			<div className={`${styles.aside} ${menu ? styles['menu-toggle'] : ''}`}>
				<div className='w-100'>
					<div className={styles.sidebar}>
						<div className={styles.sidebar__top}>
							<div className={styles.sidebar__inner}>
								<img
									src={`${SidebarContact} ${menu ? styles['visually-hidden'] : ''}`}
									width={48}
									height={48}
									alt='Sidebar contact image'
								/>
								<h2 className={`${styles.sidebar__title} ${menu ? styles['visually-hidden'] : ''}`}>
									CRM PANEL
								</h2>
								<button className={styles.menu} onClick={() => setMenu(!menu)}>
									<img src={SidebarToggleMenu} width={32} height={32} alt='Toggle menu button' />
								</button>
							</div>
						</div>

						<ul className={styles.sidebar__list}>
							<li className={styles.sidebar__item}>
								<NavLink activeClassName={styles.active} className={styles.sidebar__link} to={'#'}>
									<img src={SidebarHome} width={20} height={20} alt='Sidebar home image' />
									{menu ? '' : 'Xisobotlar'}
								</NavLink>
							</li>
							<li className={styles.sidebar__item}>
								<NavLink activeClassName={styles.active} className={styles.sidebar__link} to={'/students'}>
									<img src={SidebarEdu} width={20} height={20} alt='Sidebar home image' />
									{menu ? '' : 'O’quvchilar'}
								</NavLink>
							</li>
							<li className={styles.sidebar__item}>
								<NavLink activeClassName={styles.active} className={styles.sidebar__link} to={'/groups'}>
									<img src={SidebarUsers} width={20} height={20} alt='Sidebar home image' />
									{menu ? '' : 'Guruhlar'}
								</NavLink>
							</li>
							<li className={styles.sidebar__item}>
								<NavLink activeClassName={styles.active} className={styles.sidebar__link} to={'#'}>
									<img src={SidebarCard} width={20} height={20} alt='Sidebar home image' />
									{menu ? '' : 'To’lovlar'}
								</NavLink>
							</li>
							<li className={styles.sidebar__item}>
								<NavLink activeClassName={styles.active} className={styles.sidebar__link} to={'#'}>
									<img src={SidebarAtt} width={20} height={20} alt='Sidebar home image' />
									{menu ? '' : 'Davomat'}
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
