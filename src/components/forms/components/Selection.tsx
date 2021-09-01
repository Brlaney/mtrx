import React from 'react'
import { FieldProps } from 'formik'

export const Selection: React.FC<
  FieldProps & {
    label?: string;
    options: Array<{ label: string; value: string }>;
  }
> = ({ field, form, label, options, ...props }) => {
  return (
    <>
      <select
        className='uk-select'
        id='form-stacked-select'
        {...field}
        {...props}
      >
        {options.map(op => (
          <option key={op.value} value={op.value}>
            {op.label}
          </option>
        ))}
      </select>
    </>
  );
};
