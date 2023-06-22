import { Form, Formik } from 'formik';
import { courseSchema } from '../../schemas';
import styles from '../form-control/form-control.module.css';
import InputFeild from '../input-feild/input-feild';
import Option from '../option/option';
import { useState } from 'react';

const FormControlCourses = () => {
	const [avatar, setAvatar] = useState(null);

	const initialValues = {
		course_name: '',
		course_price: '',
	};

	const submitHandler = formData => {
		console.log(formData, avatar);
	};

	return (
		<div className={styles['form-section']}>
			<h2 className={styles.formText}>Yangi Kurs Qo’shish</h2>
			<Formik
				initialValues={initialValues}
				validationSchema={courseSchema}
				onSubmit={submitHandler}
			>
				<Form className={styles.form}>
					<div className={styles.forms}>
						<InputFeild label={'Kurs nomi'} type='text' name='course_name' id='course_name' />
						<Option label={'Qaysi filialdan'} name='branch' id='branch' />

						<InputFeild
							label={'Kurs narxi'}
							type='number'
							name='course_price'
							placeholder='70 000 min so’m'
							id='course_price'
						/>
							<InputFeild
							label={'course image'}
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

export default FormControlCourses;
