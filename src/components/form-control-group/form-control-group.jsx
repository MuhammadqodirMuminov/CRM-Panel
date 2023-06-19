import { Form, Formik } from 'formik';
import { useState } from 'react';
import { groupSchema } from '../../schemas';
import styles from '../form-control/form-control.module.css';
import InputFeild from '../input-feild/input-feild';
import Option from '../option/option';

const FormControlGroup = () => {
	const [avatar, setAvatar] = useState(null);

	const initialValues = {
		student_name: '',
		student_phone: '',
		student_family_name: '',
		student_family_phone: '',
	};

	const submitHandler = formData => {
		console.log(formData, avatar);
	};

	return (
		<div className={styles['form-section']}>
			<h2 className={styles.formText}>Yangi guruh qo’shish</h2>
			<Formik initialValues={initialValues} validationSchema={groupSchema} onSubmit={submitHandler}>
				<Form className={styles.form}>
					<div className={styles.forms}>
						<Option label={'Guruh yo’nalish'} name='direction' id='derection' />

						<InputFeild label={'Dars kunlari'} type='text' name='school_days' id='school_days' />
						<Option label={'Dars jadvali'} name='direction' id='derection' />
						<InputFeild label={'O’qituvchi'} type='text' name='teacher_name' id='name' />

						<InputFeild
							label={'O’qituvchi telefon raqami'}
							type='number'
							name='teacher_phone_number'
							placeholder='+998xxxxxxxxx'
							id='number'
						/>
			
						<InputFeild
							label={'Rasm 3x4'}
							type='file'
							name='avatar'
							onChange={e => setAvatar(e.target.files[0])}
							id='number'
						/>
					</div>
					<div className={styles.btnFeild}>
						<button type='submit' className={styles.btn}>
							Qo’shish
						</button>
					</div>
				</Form>
			</Formik>
		</div>
	);
};

export default FormControlGroup;
