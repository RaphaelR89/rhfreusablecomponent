import React from 'react';
import { useForm } from 'react-hook-form';

const TextInput = ({
  fieldName,
  register,
  errors,
  placeHolder,
  isRequired,
  maximLength,
  minimLength,
  onBlur,
  label,
}) => {
  return (
    <div>
      <label htmlFor={fieldName}>{label}</label>
      <input
        placeholder={placeHolder}
        {...register(fieldName, {
          onBlur,
          required: {
            value: isRequired,
            message: 'This is a required',
          },
          maxLength: {
            value: maximLength,
            message: `Value must be maximun ${maximLength}`,
          },
          minLength: {
            value: minimLength,
            message: `Value must be minimum ${minimLength}`,
          },
        })}
      />
      <p>{errors[fieldName] && errors[fieldName].message}</p>
    </div>
  );
};

export default TextInput;
