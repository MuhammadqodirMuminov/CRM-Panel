import { Form, Formik } from 'formik';
import { paymentSchema } from '../../schemas';
import styles from '../form-control/form-control.module.css';
import InputFeild from '../input-feild/input-feild';
import Option from '../option/option';

const FormControlPayment = () => {
	const initialValues = {
		student_name: '',
		student_phone: '',
		payment_date: '',
		payment_count: '',
	};

	const submitHandler = formData => {
		console.log(formData);
	};

	return (
		<div className={styles['form-section']}>
			<h2 className={styles.formText}>To’lov qilish</h2>
			<Formik
				initialValues={initialValues}
				validationSchema={paymentSchema}
				onSubmit={submitHandler}
			>
				<Form className={styles.form}>
					<div className={styles.forms}>
						<InputFeild label={'O’quvchi ismi'} type='text' name='student_name' id='student_name' />
						<Option label={'Guruh yo’nalish'} name='direction' id='derection' />

						<InputFeild
							label={'O’quvchi telefon raqami'}
							type='number'
							name='student_phone'
							placeholder='+998xxxxxxxxx'
							id='student_phone'
						/>

						<InputFeild
							label={'To’lov summasi'}
							type='number'
							name='payment_count'
							placeholder=''
							id='payment_count'
						/>

						<InputFeild
							label={'To’lov qilinadigan kun'}
							type='date'
							name='payment_date'
							id='name'
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

export default FormControlPayment;
