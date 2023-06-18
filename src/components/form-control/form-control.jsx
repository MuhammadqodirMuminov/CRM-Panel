import InputFeild from '../input-feild/input-feild';
import Option from '../option/option';
import styles from './form-control.module.css';

const FormControl = () => {
	return (
		<div className={styles['form-section']}>
			<h2 className={styles.formText}>Yangi o’quvchi qo’shish</h2>
			<form className={styles.form}>
				<div className={styles.forms}>
					<InputFeild label={'O’quvchi ismi'} type='text' name='student_name' id='name' />
					<InputFeild label={'Telefon raqam'} type='number' name='student_phone' id='number' />
					<Option label={'Yo’nalish'} name='direction' id='derection' />
					<InputFeild label={'Ota-onasi ismi'} type='text' name='student_family_name' id='name' />
					<InputFeild
						label={'Ota onasi nomeri'}
						type='number'
						name='student_family_phone'
						id='number'
					/>
					<InputFeild label={'Rasm 3x4'} type='file' name='student_family_phone' id='number' />
				</div>
				<div className={styles.btnFeild}>
					<button className={styles.btn}>Qo’shish</button>
				</div>
			</form>
		</div>
	);
};

export default FormControl;
