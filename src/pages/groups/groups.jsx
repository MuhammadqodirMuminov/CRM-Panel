import { FormControlGroup, Layout, SearchBar } from '../../components';
import styles from './groups.module.css';

const Groups = () => {
	function toggleShow() {
		const el = document.getElementById('box');
		el.classList.toggle('show');
	}

	return (
		<Layout head={'Guruhlar'}>
			<div className={styles.group}>
				<section className={styles['group__input-section']}>
					<FormControlGroup />
				</section>
				<section>
					<SearchBar title={'Mavjud guruhlar'} />
				</section>
			</div>
		</Layout>
	);
};

export default Groups;
