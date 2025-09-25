import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify'; // ✅ use toastify
import { Eye, EyeOff } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const logo = '/Group 1171275331.png';
const bgimage = '/bgball.png';

const SignUpSchema = Yup.object().shape({
  firstName: Yup.string().required('First name required'),
  lastName: Yup.string().required('Last name required'),
  username: Yup.string().required('Username required'),
  email: Yup.string().email('Invalid email').required('Email required'),
  password: Yup.string()
    .min(8, 'Must be at least 8 characters')
    .matches(/[A-Z]/, 'One uppercase letter required')
    .matches(/[a-z]/, 'One lowercase letter required')
    .matches(/[0-9]/, 'One number required')
    .matches(/[@$!%*?&#]/, 'One special character required')
    .required('Password required'),
});

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Left Section */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-black px-10">
        <img src={logo} alt="logo" className="h-20 mb-8" />

        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
          }}
          validationSchema={SignUpSchema}
          onSubmit={(values) => {
            const users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some((u) => u.email === values.email)) {
              toast.error('⚠️ User already exists!');
              return;
            }

            const newUser = { ...values };
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));

            toast.success('🎉 Account created successfully!');
            navigate('/login'); // ✅ go to login after signup
          }}
        >
          {({ errors, touched }) => (
            <Form className="w-full max-w-sm space-y-4">
              {/* First & Last Name */}
              <div className="flex space-x-2">
                <div className="flex-1">
                  <label>First name*</label>
                  <Field
                    name="firstName"
                    placeholder="First name"
                    className="w-full px-4 py-3 rounded-full bg-black border border-gray-700 mt-1"
                  />
                  {errors.firstName && touched.firstName && (
                    <p className="text-red-500 text-sm">{errors.firstName}</p>
                  )}
                </div>
                <div className="flex-1">
                  <label>Last name*</label>
                  <Field
                    name="lastName"
                    placeholder="Last name"
                    className="w-full px-4 py-3 rounded-full bg-black border border-gray-700 mt-1"
                  />
                  {errors.lastName && touched.lastName && (
                    <p className="text-red-500 text-sm">{errors.lastName}</p>
                  )}
                </div>
              </div>

              {/* Username */}
              <div>
                <label>Username*</label>
                <Field
                  name="username"
                  placeholder="Enter username"
                  className="w-full px-4 py-3 rounded-full bg-black border border-gray-700 mt-1"
                />
                {errors.username && touched.username && (
                  <p className="text-red-500 text-sm">{errors.username}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label>Email or mobile*</label>
                <Field
                  name="email"
                  placeholder="Enter your email or mobile"
                  className="w-full px-4 py-3 rounded-full bg-black border border-gray-700 mt-1"
                />
                {errors.email && touched.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              {/* Password */}
              <div className="relative">
                <label>Password*</label>
                <Field
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 rounded-full bg-black border border-gray-700 mt-1"
                />
                <button
                  type="button"
                  className="absolute right-4 top-10 text-gray-400"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
                {errors.password && touched.password && (
                  <p className="text-red-500 text-sm">{errors.password}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3 rounded-full bg-yellow-500 text-black font-semibold hover:bg-yellow-400"
              >
                Create account
              </button>

              <p className="text-center text-sm">
                Already have an account?{' '}
                <Link to="/login" className="text-yellow-500">
                  Login
                </Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>

      {/* Right Section */}
      <div
        className="w-1/2 relative flex flex-col justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${bgimage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-left max-w-md">
          <h2 className="text-3xl font-bold mb-4">
            Welcome to Royal Mega Limited!
          </h2>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
