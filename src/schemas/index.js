import * as yup from 'yup';

const passwordRules = /^(?=.*[A-Z])(?=.*\d).{5,}$/;

export const registerSchema = yup.object().shape({
	username: yup.string().required('username is required'),
	email: yup.string().email('please enter a valid email.').required('email is required'),
	password: yup
		.string()
		.min(5)
		.matches(passwordRules, { message: 'password must  one uppercase element' })
		.required('password is required'),
});
