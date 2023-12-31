/* eslint-disable react/prop-types */
import { useField } from 'formik';
import styles from './input-feild.module.css';

const InputFeild = ({ label, type = 'text', width = '320px', ...props }) => {
	const [field, meta] = useField(props);

	return (
		<div style={{ width: width }} className={styles.feild}>
			<label className={styles.label} htmlFor={props.id}>
				{label}
			</label>
			<input
				type={type}
				id={props.id}
				className={meta?.error && meta?.touched ? styles.error : styles.input}
				{...field}
				{...props}
			/>
			{meta?.error && meta?.touched? <span className={styles.errorSpan}>{meta.error}</span> : null}
		</div>
	);
};

export default InputFeild;
