import React from 'react';
import { FieldProps, getIn } from 'formik';

export const Selection: React.FC<
  FieldProps & {
    label?: string;
    options: Array<{ label: string; value: string }>;
  }
> = ({ field, form, label, options, ...props }) => {
  const errorText = getIn(form.touched, field.name) && getIn(form.errors, field.name);

  return (
    <div className='uk-margin uk-width-1-1'>
      {label && (
        <label className='uk-form-label' htmlFor='form-stacked-select'>
          {label}
        </label>
      )}
      <div className='uk-form-controls'>
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
      </div>
      {/* <FormHelperText>{errorText}</FormHelperText> */}
    </div>
  );
};
