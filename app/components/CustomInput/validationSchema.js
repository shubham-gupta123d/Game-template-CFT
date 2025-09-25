import * as Yup from 'yup';

// Validation for login or registration
export const loginValidationSchema = Yup.object({
  contact: Yup.mixed()
    .test('is-valid', 'Must be a valid email or mobile number', (value) => {
      if (!value) return false;

      // Email case
      if (typeof value === 'string') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
      }

      // Mobile case
      if (typeof value === 'object') {
        const mobileRegex = /^[6-9]\d{9}$/;
        return mobileRegex.test(value.number || '');
      }

      return false;
    })
    .required('Email or Mobile is required'),

  password: Yup.string()
    .min(6, 'At least 6 characters')
    .required('Password is required'),
});

// Additional registration schema
export const registerValidationSchema = Yup.object({
  fullName: Yup.string()
    .min(3, 'At least 3 characters')
    .required('Full Name is required'),
  contact: Yup.mixed()
    .test('is-valid', 'Must be a valid email or mobile number', (value) => {
      if (!value) return false;

      if (typeof value === 'string') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
      }

      if (typeof value === 'object') {
        const mobileRegex = /^[6-9]\d{9}$/;
        return mobileRegex.test(value.number || '');
      }

      return false;
    })
    .required('Email or Mobile is required'),
  password: Yup.string()
    .min(6, 'At least 6 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});
