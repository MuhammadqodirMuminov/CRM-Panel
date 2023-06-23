import { useSelector } from 'react-redux';
import styles from './option.module.css';

// eslint-disable-next-line react/prop-types
const Option = ({ label, name, id }) => {
	const { branches } = useSelector(state => state.course);

	return (
		<div className={styles.feild}>
			<h3 className={styles.label}>{label}</h3>
			<select className={styles.select} name={name} id={id}>
				{branches ? (
					branches.map(branch => {
						return (
							<option
								className={styles.option}
								value={branch.branch_id}
								defaultValue={'A'}
								key={branch.branch_id}
							>
								{branch.branch_name}
							</option>
						);
					})
				) : (
					<h1>loading...</h1>
				)}
			</select>
		</div>
	);
};

export default Option;
