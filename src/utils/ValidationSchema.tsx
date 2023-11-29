import * as Yup from 'yup';

const LoginValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const SignUpValidationSchema = Yup.object().shape({
  username: Yup.string()
    .matches(/^[A-Za-z]+$/, 'Name should only characters')
    .required('Name should only characters'),
  email: Yup.string().email('Invalid email').required(' Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

export default { SignUpValidationSchema, LoginValidationSchema };
