import * as yup from 'yup';

const passwordRules = /^(?=.*[A-Z])(?=.*\d).{5,}$/;
const phoneRules = /^998\d{9}$/;

export const registerSchema = yup.object().shape({
	username: yup.string().required('username is required'),
	email: yup.string().email('please enter a valid email.').required('email is required'),
	password: yup
		.string()
		.min(5)
		.matches(passwordRules, { message: 'password must  one uppercase element' })
		.required('password is required'),
});

export const studentSchema = yup.object().shape({
	student_name: yup.string().required('student name is required'),
	student_phone: yup.string().matches(phoneRules).required('student phone is required'),
	student_family_name: yup.string().required('student family name is required'),
	student_family_phone: yup.string().matches(phoneRules).required('student phone is required'),
});
