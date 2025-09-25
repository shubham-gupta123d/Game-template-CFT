import React, { useState } from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';

const CustomInput = ({
  label,
  type = 'text',
  showToggle = false,
  withDialCode = false,
  ...props
}) => {
  const [field, meta, helpers] = useField(props);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    if (withDialCode) {
      helpers.setValue({ ...field.value, number: e.target.value });
    } else {
      helpers.setValue(e.target.value);
    }
  };

  return (
    <div className="mb-4">
      {label && (
        <label className="block mb-1 font-medium text-gray-700">{label}</label>
      )}

      <div className="relative flex items-center">
        {/* Dial code select */}
        {withDialCode && (
          <select
            className="border rounded-l-md px-2 py-2 bg-gray-100 focus:outline-none"
            value={field.value?.dialCode || '+91'}
            onChange={(e) =>
              helpers.setValue({ ...field.value, dialCode: e.target.value })
            }
          >
            <option value="+91">+91</option>
            <option value="+1">+1</option>
            <option value="+44">+44</option>
          </select>
        )}

        {/* Input field */}
        <input
          {...(!withDialCode ? field : {})}
          {...props}
          type={showToggle ? (showPassword ? 'text' : 'password') : type}
          value={withDialCode ? field.value?.number || '' : field.value || ''}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
            withDialCode ? 'rounded-l-none' : ''
          } ${
            meta.touched && meta.error
              ? 'border-red-500 focus:ring-red-400'
              : 'border-gray-300 focus:ring-blue-400'
          }`}
        />

        {/* Password toggle */}
        {showToggle && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 text-gray-600"
          >
            {showPassword ? '🙈' : '👁️'}
          </button>
        )}
      </div>

      {/* Error */}
      {meta.touched && meta.error && (
        <p className="text-red-500 text-sm mt-1">{meta.error}</p>
      )}
    </div>
  );
};

CustomInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  showToggle: PropTypes.bool,
  withDialCode: PropTypes.bool,
};

export default CustomInput;
