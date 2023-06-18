import styles from './option.module.css';

// eslint-disable-next-line react/prop-types
const Option = ({ label, name, id }) => {
	return (
		<div className={styles.feild}>
			<h3 className={styles.label}>{label}</h3>
			<select className={styles.select} name={name} id={id}>
				<option className={styles.option} value='A' defaultValue={'A'}>
					salom
				</option>
				<option value='B'>alik</option>
			</select>
		</div>
	);
};

export default Option;
