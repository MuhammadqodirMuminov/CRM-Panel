import Styles from '../../pages/students/students.module.css';

// eslint-disable-next-line react/prop-types
const SearchBar = ({ title }) => {
	function toggleShow() {
		const el = document.getElementById('box');
		el.classList.toggle('show');
	}
	return (
		<div className={Styles['table-top']}>
			<h2 className={Styles['table__title']}>{title}</h2>
			<div className={Styles.container}>
				<input
					type='text'
					id='box'
					placeholder='Search anything...'
					className={Styles['search__box']}
				/>
				<i className={`fas fa-search ${Styles['search__icon']}`} id='icon' onClick={toggleShow}></i>
			</div>
		</div>
	);
};

export default SearchBar;
