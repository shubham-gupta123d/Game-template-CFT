import React from 'react';
import { Formik, Form } from 'formik';
import CustomInput from './CustomInput';
import { validationSchema } from './validationSchema';

export default function ForgotPassword() {
  const initialValues = {
    contact: '',
  };

  const handleSubmit = (values) => {
    console.log('Forgot Password:', values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema.pick(['contact'])}
      onSubmit={handleSubmit}
    >
      <Form className="max-w-sm mx-auto p-6 bg-white shadow rounded-md">
        <h2 className="text-xl font-bold mb-4">Forgot Password</h2>

        <CustomInput
          name="contact"
          label="Registered Email / Mobile"
          withDialCode
        />

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700"
        >
          Reset Password
        </button>
      </Form>
    </Formik>
  );
}
