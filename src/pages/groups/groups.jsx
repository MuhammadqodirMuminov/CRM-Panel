import { FormControlGroup, Layout } from '../../components';
import styles from "./groups.module.css";
import Styles from '../students/students.module.css';


const Groups = () => {

	function toggleShow() {
		var el = document.getElementById('box');
		el.classList.toggle('show');
	}

	return (
		<Layout head={'Guruhlar'}>
			<div className={styles.group}>
				<section className={styles['group__input-section']}>
					<FormControlGroup />
				</section>
				<section>
				<div className={Styles['table-top']}>
					<h2 className={Styles['table__title']}>Bizning o’quvchilar</h2>
					<div className={Styles.container}>
						<input
							type='text'
							id='box'
							placeholder='Search anything...'
							className={Styles['search__box']}
						/>
						<i
							className={`fas fa-search ${Styles['search__icon']}`}
							id='icon'
							onClick={toggleShow}
						></i>
					</div>
				</div>
				</section>
			</div>
		</Layout>
	);
};

export default Groups;
