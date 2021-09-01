import React from 'react';
import { FieldProps, getIn } from 'formik';

export const SelectOne: React.FC<
  FieldProps & {
    label?: string;
    options: Array<{ label: string; value: string }>;
  }
> = ({ field, form, label, options, ...props }) => {
  const errorText = getIn(form.touched, field.name) && getIn(form.errors, field.name);

  return (
    <div
      className='uk-margin uk-grid'
      uk-grid='true'
      {...props}
      {...field}
    >
      {options.map(op => (
        <div className='uk-width-1-4'>
        <label key={op.value}>
          <input
            value={op.value}
            className='uk-radio uk-margin'
            type='radio'
            name={op.value}
          />
          {op.label}
          </label>
        </div>
      ))}
    </div>
  );
};

