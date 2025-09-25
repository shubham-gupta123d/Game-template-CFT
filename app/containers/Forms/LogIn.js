import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify'; // ✅ use toastify
import { Eye, EyeOff } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const logo = '/Group 1171275331.png';
const bgimage = '/bgball.png';

const LoginSchema = Yup.object().shape({
  email: Yup.string().required('Email or mobile is required'),
  password: Yup.string().required('Password is required'),
});

const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Left Section */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-black px-10">
        <img src={logo} alt="logo" className="h-20 mb-8" />

        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            if (users.length === 0) {
              toast.error('⚠️ No user found! Please sign up first.');
              return;
            }

            const existingUser = users.find(
              (u) => u.email === values.email && u.password === values.password,
            );

            if (existingUser) {
              const userSession = {
                name: existingUser.username,
                avatar: logo, // placeholder avatar
              };
              localStorage.setItem('user', JSON.stringify(userSession));
              toast.success('🎉 Login successful!');
              navigate('/');
            } else {
              toast.error('❌ Incorrect email or password!');
            }
          }}
        >
          {({ errors, touched }) => (
            <Form className="w-full max-w-sm space-y-4">
              {/* Email */}
              <div>
                <label>Email or mobile *</label>
                <Field
                  name="email"
                  type="text"
                  placeholder="Enter your email or mobile"
                  className="w-full px-4 py-3 rounded-full bg-black border border-gray-700 mt-1"
                />
                {errors.email && touched.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              {/* Password */}
              <div className="relative">
                <label>Password *</label>
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
                <Link
                  to="/forgot"
                  className="absolute right-0 top-0 text-sm text-yellow-500"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3 rounded-full bg-yellow-500 text-black font-semibold hover:bg-yellow-400"
              >
                Login
              </button>

              <p className="text-center text-sm">
                Not registered yet?{' '}
                <Link to="/signup" className="text-yellow-500">
                  Create an Account
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
          <h2 className="text-3xl font-bold mb-4">Welcome back,</h2>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
