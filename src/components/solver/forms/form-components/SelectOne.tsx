import React from 'react';
import { FieldProps } from 'formik';

export const SelectOne: React.FC<
  FieldProps & {
    value: number;
    label: string;
    formState: number;
    options: Array<{ label: string; value: string }>;
  }
> = ({ field, form, value, label, formState, options, ...props }) => {
  return (
    <>
      <div
        className='uk-margin uk-grid'
        uk-grid='true'
        {...props}
        {...field}
      >
        <div className='uk-width-1-1'>
          {options.map(op => (
            <label key={op.value}>
              <input
                name={op.value}
                value={op.value}
                className={op.formState == 1 ? 'uk-radio uk-margin active' : 'uk-radio uk-margin'}
                type='radio'
              />
              {op.label}
            </label>
          ))}
        </div>
      </div>
    </>
  );
};
